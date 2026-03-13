import { WebSocketConnectionBase } from './websocket_connection_base.js';

const globalWebSocket =
  typeof globalThis !== 'undefined' ? globalThis.WebSocket : undefined;

/**
 * Connection which implements OCP.1 with WebSocket transport.
 * Works in both browser and Node.js. In the browser the global WebSocket
 * is used when not passed; on Node.js the WebSocket constructor must be
 * passed as the second argument (e.g. from the 'ws' package).
 */
export class WebSocketConnection extends WebSocketConnectionBase {
  /**
   * Connect to the given endpoint.
   *
   * @param {object} options
   * @param {String} options.url - Endpoint WebSocket url.
   * @param {Function} [WebSocket] - WebSocket constructor. Optional in browser (global WebSocket is used). Required on Node.js (e.g. import WebSocket from 'ws').
   * @returns {Promise<WebSocketConnection>} - The connection.
   */
  static connect(options, WebSocket) {
    const Ctor = WebSocket !== undefined ? WebSocket : globalWebSocket;
    if (!Ctor) {
      throw new Error(
        'WebSocket constructor is required in this environment. Pass the WebSocket class as the second argument (e.g. from the "ws" package on Node.js).'
      );
    }
    return super.connect(Ctor, options);
  }

  _now() {
    return performance.now();
  }
}
