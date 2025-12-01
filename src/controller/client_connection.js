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
import { Subscriptions } from '../utils/subscriptions.js';
import { subscribeEvent } from '../utils/subscribeEvent.js';
import { Timer } from '../utils/timer.js';

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
    // All pending commands by id/handle
    this._pendingCommands = new Map();
    // All pending commands scheduled to be sent.
    this._scheduledPendingCommands = new Set();
    // All pending commands wich have been sent.
    this._sentPendingCommands = new Set();
    this._nextCommandHandle = 0;
    this._subscribers = new Map();
    this._sendCommandsTimer = new Timer(
      () => {
        this.sendCommands();
      },
      () => this._now()
    );
  }

  shouldSendMoreCommands() {
    return this.is_reliable;
  }

  sendCommands() {
    const { _scheduledPendingCommands, _sentPendingCommands } = this;

    for (const pendingCommand of _scheduledPendingCommands) {
      if (!this.shouldSendMoreCommands()) break;
      _scheduledPendingCommands.delete(pendingCommand);
      _sentPendingCommands.add(pendingCommand);
      this.send(pendingCommand.command);
      pendingCommand.lastSent = this._now();
      pendingCommand.retries++;
    }
  }

  scheduleSendCommands() {
    this._sendCommandsTimer.scheduleDeadlineIn(5);
  }

  poll() {
    super.poll();
    this._sendCommandsTimer.poll();
  }

  cleanup(error) {
    super.cleanup(error);
    this._sendCommandsTimer.dispose();
    const subscribers = this._subscribers;
    this._subscribers = null;
    const pendingCommands = this._pendingCommands;
    this._pendingCommands = null;
    this._scheduledPendingCommands.clear();
    this._sentPendingCommands.clear();

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
      this._scheduledPendingCommands.add(pendingCommand);
      this.scheduleSendCommands();
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

    if (!this._sentPendingCommands.delete(pendingCommand))
      this._scheduledPendingCommands.delete(pendingCommand);

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
   * @param {AbortSignal} [signal]
   *   Optional abort signal which can be used to abort
   *   the process.
   */
  wait_for_keepalive(interval, signal) {
    const subscriptions = new Subscriptions();

    return new Promise((resolve, reject) => {
      if (signal) {
        subscriptions.add(
          subscribeEvent(signal, 'abort', () => {
            reject(signal.reason);
          })
        );
      }
      subscriptions.add(
        this.subscribe('error', (error) => {
          reject(error);
        }),
        this.subscribe('close', () => {
          reject(new CloseError());
        }),
        this.subscribe('keepalive', () => {
          resolve();
        })
      );
      this.set_keepalive_interval(interval);
    }).finally(() => subscriptions.unsubscribe());
  }
}
