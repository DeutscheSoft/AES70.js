/* eslint-env node */

import { createSocket } from 'dgram';
import { isIP, isIPv4 } from 'net';
import { lookup } from 'dns';
import { Subscriptions } from '../utils/subscriptions.js';
import { subscribeEvent } from '../utils/subscribeEvent.js';

function lookup_address(host, family) {
  if (isIP(host)) return Promise.resolve(host);

  return new Promise((resolve, reject) => {
    lookup(host, { family }, (err, address) => {
      if (err) reject(err);
      else resolve(address);
    });
  });
}

export class NodeUDP {
  get onmessage() {
    return this._onmessage;
  }

  set onmessage(cb) {
    if (this._onmessage && cb)
      throw new Error('Cannot install more than one message callback.');

    this._onmessage = cb;
    this._notifyMessage();
  }

  get onerror() {
    return this._onerror;
  }

  set onerror(cb) {
    if (this._onerror && cb)
      throw new Error('Cannot install more than one error callback.');

    this._onerror = cb;
    this._notifyError();
  }

  _notifyMessage() {
    const onmessage = this.onmessage;

    if (!onmessage) return;

    const inbuf = this._inbuf;

    if (!inbuf.length) return;

    this._inbuf = [];

    for (let i = 0; i < inbuf.length; i++) {
      try {
        onmessage(inbuf[i].buffer);
      } catch (err) {
        console.error(err);
      }
    }
  }

  _notifyError() {
    const onerror = this.onerror;

    if (!onerror) return;

    const error = this._error;

    if (!error) return;
    this._error = null;

    onerror(error);
  }

  send(buf) {
    this.socket.send(Buffer.from(buf));
  }

  close() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  constructor(socket) {
    this._inbuf = [];
    this._onmessage = null;
    this._onerror = null;
    this.socket = socket;
    socket.on('message', (msg, rinfo) => {
      this._inbuf.push(msg);
      this._notifyMessage();
    });
    socket.on('error', (err) => {
      this._error = err;
      this._notifyError(err);
    });
  }

  /**
   * Creates a new udp socket and connects it to the target address.
   * @param {string} options.host
   *  The hostname or ip address to connect to.
   * @param {number} options.port
   *  The port.
   * @param {'udp4' | 'udp6'} [options.type]
   *  The ip protocol to use. This is only relevant if host is
   *  not an ip address and hostname lookup is used.
   * @param {Abortsignal} [options.signal]
   *  An optional AbortSignal to abort the connect operation.
   * @returns
   */
  static connect(options) {
    const { host, port, type, signal } = options;

    signal?.throwIfAborted();

    const subscriptions = new Subscriptions();

    return new Promise((resolve, reject) => {
      let socket;

      if (signal) {
        subscriptions.add(
          subscribeEvent(signal, 'abort', (reason) => {
            const err = signal.reason;
            reject(err);
          })
        );
      }

      const lookupFamily =
        type === 'udp4' ? 4 : type === 'udp6' ? 6 : undefined;
      lookup_address(host, lookupFamily).then((ip) => {
        if (signal?.aborted) {
          // IF the abort signal was triggered during the ip lookup,
          // we have to simply ignore the resolve result.
          return;
        }
        const type = isIPv4(ip) ? 'udp4' : 'udp6';
        socket = createSocket(type);

        if (signal) {
          subscriptions.add(
            subscribeEvent(signal, 'abort', () => {
              socket.close();
            })
          );
        }

        const onerror = function (ev) {
          reject(ev);
          socket.close();
        };
        subscriptions.add(subscribeEvent(socket, 'error', onerror));

        socket.bind(
          {
            exclusive: true,
          },
          () => {
            socket.on('connect', () => {
              resolve(new this(socket));
            });
            socket.connect(port, ip);
          }
        );
      }, reject);
    }).finally(() => subscriptions.unsubscribe());
  }
}
