import {
  ClientConnection,
  IClientConnectionOptions,
} from './client_connection.js';

/**
 * Minimal UDP socket interface used by :class:`AbstractUDPConnection`.
 *
 * Platform-specific implementations must provide this interface. The reference
 * implementation is :class:`NodeUDP` (``node_udp.js``), which wraps a Node.js
 * ``dgram`` socket.
 *
 * Because only this small surface is required, other transports can be used
 * in principle — for example a WebSocket tunnel that forwards datagrams to a
 * remote UDP endpoint.
 */
export interface IUDPPlatformSocket {
  /**
   * Called when a UDP datagram is received. Only one handler may be
   * installed at a time.
   */
  onmessage: ((buffer: ArrayBuffer) => void) | null;

  /**
   * Called when a transport error occurs. Only one handler may be
   * installed at a time. The reference :class:`NodeUDP` implementation
   * always passes a Node.js ``Error`` (from the underlying ``dgram``
   * socket).
   */
  onerror: ((err: Error) => void) | null;

  /**
   * Send a single UDP datagram.
   */
  send(buf: ArrayBuffer): void;

  /**
   * Close the socket and release underlying resources.
   */
  close(): void;
}

/**
 * Options passed to a platform UDP API when establishing a connection.
 */
export interface IUDPPlatformConnectOptions {
  /**
   * Hostname or IP address to connect to.
   */
  host: string;

  /**
   * Port number.
   */
  port: number;

  /**
   * IP protocol type. This is only relevant when ``host`` is not an IP
   * address and hostname lookup is used.
   */
  type?: 'udp4' | 'udp6';

  /**
   * Optional :class:`AbortSignal` used to abort the connect operation.
   */
  signal?: AbortSignal;
}

/**
 * Platform-specific UDP API.
 *
 * Implementations provide a static ``connect`` method that resolves to a
 * connected :class:`IUDPPlatformSocket`. :class:`AbstractUDPConnection.connect`
 * accepts any object matching this interface, making it possible to supply
 * custom UDP backends.
 *
 * The bundled :class:`NodeUDP` class is the default implementation used by
 * :class:`UDPConnection`.
 */
export interface IUDPPlatform {
  connect(options: IUDPPlatformConnectOptions): Promise<IUDPPlatformSocket>;
}

export interface IAbstractUDPConnectionOptions
  extends IClientConnectionOptions {
  /**
   * Hostname or IP address.
   */
  host: string;

  /**
   * Port number.
   */
  port: number;

  /**
   * Optional IP protocol type.
   */
  type?: 'udp4' | 'udp6';

  /**
   * Delay in ms between individual packets. This can be a useful strategy
   * when communicating with devices which cannot handle high packet rates.
   * Defaults to ``5``.
   */
  delay?: number;

  /**
   * Delay in ms after which a command should be automatically re-sent if no
   * response has been received yet. Defaults to ``250``.
   */
  retry_interval?: number;

  /**
   * Number of times to retry sending commands. If no response has been
   * received after all retries, the command will fail with an error.
   * Defaults to ``3``.
   */
  retry_count?: number;

  /**
   * Maximum number of bytes to send in an individual UDP packet. Note that
   * AES70 messages which are larger than this limit are sent anyway. This
   * only limits how many separate messages are batched into a single packet.
   * Defaults to ``128``.
   */
  batch?: number;

  /**
   * An optional :class:`AbortSignal` which can be used to abort the connect
   * attempt.
   */
  connectSignal?: AbortSignal;
}

/**
 * :class:`ClientConnection` subclass which implements OCP.1 with UDP
 * transport.
 */
export declare class AbstractUDPConnection extends ClientConnection {
  constructor(
    socket: IUDPPlatformSocket,
    options: IAbstractUDPConnectionOptions
  );

  get is_reliable(): false;

  get bufferedAmount(): number;

  get pendingWrites(): number;

  shouldSendMoreCommands(): boolean;

  /**
   * Connect to the given endpoint using the supplied platform UDP API.
   *
   * @param udpApi
   *   Platform-specific UDP implementation, e.g. :class:`NodeUDP`.
   * @param options
   *   Connection and endpoint options.
   */
  static connect<T extends AbstractUDPConnection>(
    this: new (
      socket: IUDPPlatformSocket,
      options: IAbstractUDPConnectionOptions
    ) => T,
    udpApi: IUDPPlatform,
    options: IAbstractUDPConnectionOptions
  ): Promise<T>;

  write(buf: ArrayBuffer): void;

  flush(): void;
}
