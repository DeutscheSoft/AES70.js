/* eslint-env node */

import { createConnection } from 'net';
import { Buffer } from 'buffer';
import { performance } from 'perf_hooks';

import { ClientConnection } from './client_connection.js';

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with TCP
 * transport.
 *
 * @param {net.Socket} socket
 *    The established tcp socket.
 * @param {object} options
 *    Additional options are passed to :class:`ClientConnection`.
 */
export class TCPConnection extends ClientConnection {
  constructor(socket, options) {
    super(options);
    this.socket = socket;
    socket.on('data', (data) => {
      this.read(data.buffer);
    });
    socket.on('error', (e) => {
      this.emit('error', e);
    });
    socket.on('close', () => {
      this.emit('close');
    });
  }

  cleanup() {
    super.cleanup();
    try {
      this.socket.destroy();
    } catch (e) {
      // ignore error
    }
  }

  /**
   * Connect to the given endpoint.
   * @param {net.NetConnectOpts} options
   * @param {String} options.host
   *    Hostname or ip address.
   * @param {number} options.port
   *    Port number.
   * @param {AbortSignal} [options.connectSignal]
   *    An optional AbortSignal which can be used to abort the connect attempt.
   *    Note that this is different from the `signal` option which will destroy
   *    the socket also after the connect attempt has been successful.
   * @returns {Promise<TCPConnection>}
   *    The connection.
   */
  static connect(options) {
    return new Promise((resolve, reject) => {
      const connectSignal = options.connectSignal;
      if (connectSignal) connectSignal.throwIfAborted();
      const socket = new createConnection(options);
      const onerror = function (ev) {
        reject(ev);
        cleanup();
      };
      const onabort = function (ev) {
        const err = connectSignal.reason;
        reject(err);
        socket.destroy(err);
      };
      const cleanup = function () {
        socket.removeListener('error', onerror);
        socket.removeListener('timeout', onerror);
        if (connectSignal) connectSignal.removeEventListener('abort', onabort);
      };

      if (connectSignal) connectSignal.addEventListener('abort', onabort);
      socket.on('error', onerror);
      socket.on('timeout', onerror);
      socket.on('connect', () => {
        resolve(new this(socket, options));
        cleanup();
      });
    });
  }

  write(buf) {
    this.socket.write(Buffer.from(buf), 'binary');
    super.write(buf);
  }

  /**
   * Close the TCP connection.
   */
  close() {
    super.close();
    this.socket.destroy();
    this.emit('close');
  }

  _now() {
    return performance.now();
  }
}
