import {
  WebSocketConnectionBase,
  IWebSocketConnectionBaseOptions,
  IWebSocketLike,
  WebSocketConstructor,
} from './websocket_connection_base.js';

export type IWebSocketConnectionOptions = IWebSocketConnectionBaseOptions;
export type { IWebSocketLike, WebSocketConstructor };

export class WebSocketConnection extends WebSocketConnectionBase {
  constructor(ws: IWebSocketLike, options: IWebSocketConnectionOptions);
  static connect(
    options: IWebSocketConnectionOptions
  ): Promise<WebSocketConnection>;
  static connect(
    options: IWebSocketConnectionOptions,
    WebSocket: WebSocketConstructor
  ): Promise<WebSocketConnection>;
}
