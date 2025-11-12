import {
  ClientConnection,
  IClientConnectionOptions,
} from './client_connection.js';
import { Socket } from 'node:dgram';

export interface IUDPConnectionOptions extends IClientConnectionOptions {
  /**
   * Passed as first argument to createSocket. Defaults to ``'udp4'``.
   * Currently, only ``'udp4'`` is supported.
   */
  type?: string;

  /**
   * Hostname to send udp packets to. If this name is not an IP address, it will
   * be looked up first using the standard NodeJS ``lookup`` method from the
   * ``dns`` module.
   */
  host: string;

  /**
   * The port to send udp packets to.
   */
  port: number;

  /**
   * Delay in ms between individual packets. This can be a useful
   * strategy when communicating with devices which cannot handle
   * high packet rates. The default value is ``10``.
   */
  delay?: number;

  /**
   * Delay in ms after which a command should be automatically
   * re-sent if no response has been received, yet. The default
   * value is ``250``.
   */
  retry_interval?: number;

  /**
   * Number of times to retry sending commands. If no response
   * has been received after all retries, the command will fail
   * with an error. The default value is ``3``.
   */
  retry_count?: number;
}

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with UDP
 * transport.
 *
 * @param {net.Socket} socket
 *    The established tcp socket.
 * @param {object} options
 *    Additional options are passed to :class:`ClientConnection`.
 */
export declare class UDPConnection extends ClientConnection {
  constructor(socket: Socket, options: IUDPConnectionOptions);

  /**
   * Connect to the given endpoint.
   */
  static connect(options: IUDPConnectionOptions): Promise<UDPConnection>;
}
