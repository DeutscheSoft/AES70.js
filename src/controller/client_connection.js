import { RemoteError } from './remote_error.js';
import { Connection } from '../connection.js';
import { Response } from '../OCP1/response.js';
import { encodeMessage } from '../OCP1/encode_message.js';
import { KeepAlive } from '../OCP1/keepalive.js';
import { Notification } from '../OCP1/notification.js';
import { Arguments } from './arguments.js';

class PendingCommand {
  get handle() {
    return this.command.handle;
  }

  constructor(resolve, reject, returnTypes, command) {
    this.resolve = resolve;
    this.reject = reject;
    this.returnTypes = returnTypes;
    this.command = command;
    this.lastSent = 0;
    this.retries = 0;
  }

  response(o) {
    const { resolve, reject, returnTypes, command } = this;

    if (o.status_code !== 0) {
      reject(new RemoteError(o.status_code, command));
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

  cleanup() {
    super.cleanup();
    this._subscribers = null;

    const pendingCommands = this._pendingCommands;
    this._pendingCommands = null;
    const e = new Error('closed');
    pendingCommands.forEach((pendingCommand, id) => {
      pendingCommand.reject(e);
    });
  }

  _addSubscriber(event, callback) {
    const key = eventToKey(event);
    const subscribers = this._subscribers;

    if (subscribers.has(key))
      throw new Error('Subscriber already exists.');

    subscribers.set(key, callback);
  }

  _removeSubscriber(event) {
    const key = eventToKey(event);
    const subscribers = this._subscribers;

    if (!subscribers.has(key))
      throw new Error('Unknown subscriber.');

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
      this._nextCommandHandle = (handle + 1)|0;
    } while (pendingCommands.has(handle));

    return handle;
  }

  send_command(command, returnTypes) {
    return new Promise((resolve, reject) => {
      const handle = this._getNextCommandHandle();

      command.handle = handle

      const pendingCommand = new PendingCommand(
        resolve, reject, returnTypes, command);

      this._pendingCommands.set(handle, pendingCommand);

      pendingCommand.lastSent = this._now();
      this.send(command);
    });
  }

  _removePendingCommand(handle) {
    const pendingCommands = this._pendingCommands;
    const pendingCommand = pendingCommands.get(handle);

    if (!pendingCommand)
        return null;

    pendingCommands.delete(handle);

    return pendingCommand;
  }

  incoming(pdus) {
    for (let i = 0; i < pdus.length; i++) {
      // Connection may have been closed while receiving a command
      if (this._pendingCommands === null)
      {
        return;
      }

      const o = pdus[i];
      //log("INCOMING", o);
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
      } else if (o instanceof Notification) {
        const subscribers = this._subscribers;
        const key = eventToKey(o.event);

        const cb = subscribers.get(key);

        if (!cb) {
          // NOTE: this is legal
          continue;
        }
        cb(o);
      } else if (o instanceof KeepAlive) {
        if (!(o.time > 0)) {
          throw new Error('Bad keepalive timeout.');
        }
      } else {
        throw new Error('Unexpected PDU');
      }
    }
  }
}
