import {
  IClientConnectionOptions,
  ClientConnection,
} from './client_connection.js';

/**
 * Minimal WebSocket-like interface supported by both browser WebSocket
 * and the Node.js 'ws' library. Used for typing connection options and
 * the optional WebSocket constructor passed to connect().
 */
export interface IWebSocketLike {
  binaryType: string;
  addEventListener(
    type: string,
    listener: (ev: { data?: ArrayBuffer | Buffer; type?: string }) => void
  ): void;
  removeEventListener(
    type: string,
    listener: (ev: { data?: ArrayBuffer | Buffer; type?: string }) => void
  ): void;
  send(data: ArrayBuffer | Buffer | ArrayBufferView): void;
  close(): void;
}

export type WebSocketConstructor = new (url: string) => IWebSocketLike;

export interface IWebSocketConnectionBaseOptions
  extends IClientConnectionOptions {
  url: string;
}

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with WebSocket
 * transport. This is a generic base class used both by NodeJS and in the
 * Browser.
 */
export class WebSocketConnectionBase extends ClientConnection {
  constructor(ws: IWebSocketLike, options: IWebSocketConnectionBaseOptions);
  write(buf: ArrayBuffer): void;
}
