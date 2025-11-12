import { IConnectionOptions, Connection } from '../connection.js';

export type IClientConnectionOptions = IConnectionOptions;

export interface PendingCommand {
  /**
   * Name of the method being called. The format is
   * Class.Method.
   */
  name: string;

  /**
   * If stack debug was enabled on the corresponding
   * RemoteDevice, this property contains the stack
   * where the method was called from.
   */
  stack: Error['stack'] | null;

  /**
   * The command pdu.
   */
  command: unknown;

  /**
   * If available, returns the arguments of this
   * remote method call.
   */
  get_arguments(): unknwon[] | undefined;
}

/**
 * A generic base class for all client connections.
 */
export declare class ClientConnection extends Connection {
  constructor(options: IClientConnectionOptions);

  /**
   * Activates keepalive handling (using set_keepalive_interval) and waits for
   * at least one keepalive packet to arrive. If no keepalive message is received,
   * the connection will be closed and the returned promise will reject.
   * @param {number} interval
   *   Keepalive interval in seconds.
   */
  wait_for_keepalive(interval: number): Promise<void>;
}
