/* eslint-env node */

import WebSocket from 'ws';
import { performance } from 'perf_hooks';
import { WebSocketConnectionBase } from './websocket_connection_base.js';

/**
 * Connection which implements OCP.1 with WebSocket transport.
 */
export class WebSocketConnection extends WebSocketConnectionBase {
  /**
   * Connect to the given endpoint.
   *
   * @param {String} options.url - Endpoint WebSocket url.
   * @returns {Promise<WebSocketConnection>} - The connection.
   */
  static async connect(options) {
    return super.connect(WebSocket, options);
  }

  _now() {
    return performance.now();
  }
}
