import { ClientConnection } from './client_connection.js';

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with WebSocket
 * transport. This is a generic base class used both by NodeJS and in the
 * Browser.
 */
export class WebSocketConnectionBase extends ClientConnection {
  constructor(ws, options) {
    super(options);
    this.ws = ws;
    this._onmessage = (ev) => {
      try {
        this.read(ev.data);
      } catch (e) {
        this.emit('error', e);
      }
    };
    this._onclose = () => {
      this.emit('close');
    };
    this._onerror = (e) => {
      this.emit('error', e);
    };
    ws.binaryType = 'arraybuffer';
    ws.addEventListener('message', this._onmessage);
    ws.addEventListener('close', this._onclose);
    ws.addEventListener('error', this._onerror);
  }

  write(buf) {
    this.ws.send(buf);
    super.write(buf);
  }

  /**
   * Connect to the given endpoint.
   *
   * @param {Function} WebSocket
   *    WebSocket implementation.
   * @param {object} options
   * @param {String} options.url
   *    Endpoint WebSocket url.
   * @returns {Promise<WebSocket>}
   *    The connection.
   */
  static connect(WebSocket, options) {
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

  cleanup() {
    super.cleanup();
    const ws = this.ws;
    if (ws) {
      this.ws = null;
      try {
        ws.removeEventListener('message', this._onmessage);
        ws.removeEventListener('close', this._onclose);
        ws.removeEventListener('error', this._onerror);
        ws.close();
      } catch (err) {
        // ignore error
      }
    }
  }
}
