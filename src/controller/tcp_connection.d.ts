import {
  ClientConnection,
  IClientConnectionOptions,
} from './client_connection.js';
import { Socket, NetConnectOpts } from 'node:net';

export type ITCPConnectionOptions = IClientConnectionOptions &
  NetConnectOpts & {
    /**
     * This AbortSignal can be used to abort a connection attempt.
     */
    connectSignal?: AbortSignal;
  };

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with TCP
 * transport.
 *
 * @param {net.Socket} socket
 *    The established tcp socket.
 * @param {object} options
 *    Additional options are passed to :class:`ClientConnection`.
 */
export declare class TCPConnection extends ClientConnection {
  constructor(socket: Socket, options: IClientConnectionOptions);

  /**
   * Connect to the given endpoint.
   */
  static connect(options: ITCPConnectionOptions): Promise<TCPConnection>;
}
