import { RemoteError } from './remote_error.js';
import { Connection } from '../connection.js';
import { Response } from '../OCP1/response.js';
import { encodeMessage } from '../OCP1/encode_message.js';
import { KeepAlive } from '../OCP1/keepalive.js';
import { Notification } from '../OCP1/notification.js';
import { Arguments } from './arguments.js';

import { warn } from '../log.js';

/**
 * Connection base class for clients (aka controllers).
 *
 * @param {object} options
 *    Additional options are passed to :class:`Connection`.
 */
export class ClientConnection extends Connection {
  constructor(options) {
    super(options);
    this.command_handles = new Map();
    this.subscribers = new Map();
  }

  cleanup() {
    super.cleanup();
    this.subscribers = null;

    const handles = this.command_handles;
    this.command_handles = null;
    const e = new Error('closed');
    handles.forEach((a, id) => {
      try {
        a[2](e);
      } catch (e) {
        // ignore error
      }
    });
  }

  get_command_handle() {
    let id;
    const handles = this.command_handles;

    if (handles === null) {
      throw new Error('Connection not open.');
    }

    do {
      id = (Math.random() * (1 + handles.size) * 2) | 0;
    } while (handles.has(id));

    handles.set(id, null);

    return id;
  }

  add_command_handle(id, returnTypes, resolve, reject, cmd) {
    const h = [returnTypes, resolve, reject, cmd];
    this.command_handles.set(id, h);
    return h;
  }

  get_new_subscriber(callback) {
    let id;
    while (this.subscribers.has((id = (1 + Math.random() * 0xffff) | 0)));
    this.subscribers.set(id, callback);
    return {
      ONo: id,
      MethodID: {
        DefLevel: 1,
        MethodIndex: 1,
      },
    };
  }

  remove_subscriber(method) {
    const S = this.subscribers;
    if (S == null) return;
    S.delete(method.ONo);
  }

  send_command(cmd, returnTypes) {
    return new Promise((resolve, reject) => {
      const id = this.get_command_handle();
      cmd.handle = id;

      this.add_command_handle(id, returnTypes, resolve, reject, cmd);
      this.send(cmd);
    });
  }

  remove_command_handle(id) {
    const handles = this.command_handles;
    const h = handles.get(id);

    if (!h) throw new Error('Unknown handle in response: ' + id);

    handles.delete(id);

    return h;
  }

  incoming(pdus) {
    for (let i = 0; i < pdus.length; i++) {
      const o = pdus[i];
      //log("INCOMING", o);
      if (o instanceof Response) {
        const [returnTypes, resolve, reject, cmd] = this.remove_command_handle(
          o.handle
        );

        if (o.status_code !== 0) {
          reject(new RemoteError(o.status_code, cmd));
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
      } else if (o instanceof Notification) {
        const subscribers = this.subscribers;
        if (!subscribers.has(o.target)) {
          // NOTE: this is legal
          continue;
        }
        subscribers.get(o.target)(o);
      } else if (o instanceof KeepAlive) {
        if (!(o.time > 0)) {
          throw new Error('Bad keepalive timeout.');
        }
      } else {
        warn('Unexpected PDU: %o', o);
        throw new Error('Unexpected PDU');
      }
    }
  }
}
