import { RemoteError } from './remote_error.js';
import { Connection } from '../connection.js';
import { Response } from '../OCP1/response.js';
import { CommandRrq } from '../OCP1/commandrrq.js';
import { KeepAlive } from '../OCP1/keepalive.js';
import { Notification } from '../OCP1/notification.js';
import { Notification2 } from '../OCP1/notification2.js';
import { Arguments } from './arguments.js';
import { OcaStatus } from '../types/OcaStatus.js';
import { EncodedArguments } from '../OCP1/encoded_arguments.js';
import { CloseError } from '../close_error.js';

class PendingCommand {
  get handle() {
    return this.command.handle;
  }

  constructor(resolve, reject, returnTypes, command, stack, name) {
    this.resolve = resolve;
    this.reject = reject;
    this.returnTypes = returnTypes;
    this.command = command;
    this.stack = stack;
    this.name = name;
    this.lastSent = 0;
    this.retries = 0;
  }

  get_arguments() {
    const parameters = this.command.parameters;

    if (parameters && parameters instanceof EncodedArguments) {
      return parameters.data;
    }
  }

  handleError(error) {
    if (this.stack && error instanceof Error) error.stack = this.stack;
    this.reject(error);
  }

  response(o) {
    const { resolve, reject, returnTypes, command } = this;

    if (o.status_code !== 0) {
      const error = new RemoteError(new OcaStatus(o.status_code), command);
      this.handleError(error);
    } else if (!returnTypes) {
      resolve(o);
    } else {
      try {
        const length = Math.min(o.param_count, returnTypes.length);

        if (length === 0) {
          resolve();
        } else {
          const result = new Array(length);
          const dataView = new DataView(o.parameters);

          for (let i = 0, pos = 0; i < length; i++) {
            let tmp;
            [pos, tmp] = returnTypes[i].decodeFrom(dataView, pos);
            result[i] = tmp;
          }

          resolve(length === 1 ? result[0] : new Arguments(result));
        }
      } catch (err) {
        reject(err);
      }
    }
  }
}

function eventToKey(event) {
  const ono = event.EmitterONo;
  const id = event.EventID;

  return [ono, id.DefLevel, id.EventIndex].join(',');
}

/**
 * Connection base class for clients (aka controllers).
 *
 * @param {object} options
 *    Additional options are passed to :class:`Connection`.
 */
export class ClientConnection extends Connection {
  constructor(options) {
    super(options);
    this._pendingCommands = new Map();
    this._nextCommandHandle = 0;
    this._subscribers = new Map();
  }

  cleanup(error) {
    super.cleanup(error);
    const subscribers = this._subscribers;
    this._subscribers = null;
    const pendingCommands = this._pendingCommands;
    this._pendingCommands = null;

    const e = new CloseError(error);
    pendingCommands.forEach((pendingCommand, id) => {
      pendingCommand.handleError(structuredClone(e));
    });

    subscribers.forEach((cb) => {
      cb(false, e);
    });
  }

  _addSubscriber(event, callback) {
    const key = eventToKey(event);
    const subscribers = this._subscribers;

    if (subscribers.has(key)) throw new Error('Subscriber already exists.');

    subscribers.set(key, callback);
  }

  _removeSubscriber(event) {
    if (this.is_closed()) return;
    const key = eventToKey(event);
    const subscribers = this._subscribers;

    if (!subscribers.has(key)) throw new Error('Unknown subscriber.');

    subscribers.delete(key);
  }

  _getNextCommandHandle() {
    let handle;
    const pendingCommands = this._pendingCommands;

    if (pendingCommands === null) {
      throw new Error('Connection not open.');
    }

    do {
      handle = this._nextCommandHandle;
      this._nextCommandHandle = (handle + 1) | 0;
    } while (pendingCommands.has(handle));

    return handle;
  }

  _estimate_next_tx_time() {
    return this._now();
  }

  find_pending_command(pdu) {
    const pendingCommands = this._pendingCommands;

    if (pdu instanceof CommandRrq) {
      return pendingCommands.get(pdu.handle);
    } else if (pdu instanceof Response) {
      return pendingCommands.get(pdu.handle);
    } else {
      throw new Error(`Expected command or response.`);
    }
  }

  send_command(command, returnTypes, callback, stack, name) {
    const executor = (resolve, reject) => {
      const handle = this._getNextCommandHandle();

      command.handle = handle;

      const pendingCommand = new PendingCommand(
        resolve,
        reject,
        returnTypes,
        command,
        stack,
        name
      );

      this._pendingCommands.set(handle, pendingCommand);

      pendingCommand.lastSent = this._estimate_next_tx_time();
      this.send(command);
    };

    if (callback) {
      executor(
        (result) => callback(true, result),
        (error) => callback(false, error)
      );
    } else {
      return new Promise(executor);
    }
  }

  _removePendingCommand(handle) {
    const pendingCommands = this._pendingCommands;
    const pendingCommand = pendingCommands.get(handle);

    if (!pendingCommand) return null;

    pendingCommands.delete(handle);

    return pendingCommand;
  }

  incoming(pdus) {
    for (let i = 0; i < pdus.length; i++) {
      // Connection may have been closed while receiving a command
      if (this._pendingCommands === null) {
        return;
      }

      const o = pdus[i];
      this.emit('receive', o);
      if (o instanceof Response) {
        const pendingCommand = this._removePendingCommand(o.handle);

        if (pendingCommand === null) {
          if (this.is_reliable) {
            this.error(new Error('Unknown handle.'));
            return;
          } else {
            continue;
          }
        }

        pendingCommand.response(o);
      } else if (o instanceof Notification || o instanceof Notification2) {
        const subscribers = this._subscribers;
        const key = eventToKey(o.event);

        const cb = subscribers.get(key);

        if (!cb) {
          // NOTE: this is legal
          continue;
        } else {
          cb(true, o);
        }
      } else if (o instanceof KeepAlive) {
        if (!(o.time > 0)) {
          throw new Error('Bad keepalive timeout.');
        }
        this.emit('keepalive', o);
      } else {
        throw new Error('Unexpected PDU');
      }
    }
  }

  /**
   * Activates keepalive handling (using set_keepalive_interval) and waits for
   * at least one keepalive packet to arrive. If no keepalive message is received,
   * the connection will be closed and the returned promise will reject.
   * @param {number} interval
   *   Keepalive interval in seconds.
   */
  wait_for_keepalive(interval) {
    return new Promise((resolve, reject) => {
      const subscriptions = [];

      const cleanup = () => {
        subscriptions.forEach((cb) => {
          try {
            cb();
          } catch (e) {}
        });
        subscriptions.length = 0;
      };
      subscriptions.push(
        this.subscribe('error', (error) => {
          reject(error);
          cleanup();
        }),
        this.subscribe('close', () => {
          reject(new CloseError());
          cleanup();
        }),
        this.subscribe('keepalive', () => {
          resolve();
          cleanup();
        })
      );
      this.set_keepalive_interval(interval);
    });
  }
}
