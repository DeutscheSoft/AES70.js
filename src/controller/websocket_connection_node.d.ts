import {
  WebSocketConnectionBase,
  IWebSocketConnectionBaseOptions,
} from './websocket_connection_base';
import WebSocket from 'ws';

export type IWebSocketConnectionOptions = IWebSocketConnectionBaseOptions;

export class WebSocketConnection extends WebSocketConnectionBase {
  constructor(ws: WebSocket, options: WebSocketConnectionOptions);
  static connectWebSocket(
    WebSocket: typeof WebSocket,
    options: WebSocketConnectionOptions
  ): Promise<WebSocket>;
  static connect(
    options: WebSocketConnectionOptions
  ): Promise<WebSocketConnection>;
}
