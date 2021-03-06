import { ClientConnection } from './client_connection.js';

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with WebSocket
 * transport.
 */
export class WebSocketConnection extends ClientConnection {
  constructor(ws, options) {
    super(options);
    this.ws = ws;
    ws.binaryType = 'arraybuffer';
    ws.addEventListener('message', (ev) => {
      this.read(ev.data);
    });
    ws.addEventListener('close', () => {
      this.emit('close');
    });
    ws.addEventListener('error', () => {
      this.emit('error');
    });
  }

  write(buf) {
    this.ws.send(buf);
    super.write(buf);
  }

  /**
   * Connect to the given endpoint.
   *
   * @param {object} options
   * @param {String} options.url
   *    Endpoint WebSocket url.
   * @returns {Promise<WebSocketConnection>}
   *    The connection.
   */
  static connect(options) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(options.url);
      const on_error = function (e) {
        reject(e);
      };

      ws.addEventListener('open', () => {
        ws.removeEventListener('error', on_error);
        resolve(new this(ws, options));
      });
      ws.addEventListener('error', on_error);
    });
  }

  /**
   * Close the WebSocket connection.
   */
  close() {
    this.ws.close();
  }
}
