
/**
 * Possible options for a connection.
 */
export interface IConnectionOptions {
  /**
   * Maximum number of bytes to batch into single write calls. This
   * batching is implemented by buffering packets and only flushing
   * them on the next iteration of the event loop.
   * Depending on the underlying transport this has a different
   * meaning:
   *
   * - For WebSocket connections each write call results in the
   *   creation of a WebSocket frame. Larger batches are more
   *   efficient, however some devices or WebSocket implementations
   *   may not support arbitrarily large WebSocket frames.
   *
   * - For UDP connections batches result in individual UDP packets.
   *   Again, larger batches are more efficient but the maximum
   *   possible size may be limited by the network MTU size and also
   *   possibly the receiving device.
   *
   * - For TCP connections batches result in individual write calls
   *   and may avoid many small individual packets being sent. Larger
   *   batch sizes are more efficient however may lead to large
   *   processing times when they are assembled.
   *
   *  This value defaults to ``64kb`` for WebSocket and TCP
   *  connections. UDP connections use a lower default of ``128``.
   *
   */
  batch?: number;
}

/**
 * A base class for all AES70 connections.
 */
export declare class Connection {
  constructor(options: IConnectionOptions);

  /**
   * Returns true if this connection is reliable, i.e. if it is not a
   * UDP connection.
   */
  get is_reliable(): boolean;

  /**
   * Time in ms for which no packet has been sent on this connection.
   */
  get tx_idle_time(): number;

  /**
   * Time in ms for which no packet has been received on this
   * connection.
   */
  get rx_idle_time(): number;

  /**
   * Closes this connection.
   */
  close(): void;

  /**
   * Set the keepalive interval. Setting the keepalive interval to a
   * positive number ``N`` will make sure to send some packet (possibly a
   * keepalive command) at ``N`` seconds.
   */
  set_keepalive_interval(seconds: number): void;
}
