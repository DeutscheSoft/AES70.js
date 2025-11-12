import {
  IClientConnectionOptions,
  ClientConnection,
} from './client_connection.js';

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
  write(buf: ArrayBuffer): void;
}
