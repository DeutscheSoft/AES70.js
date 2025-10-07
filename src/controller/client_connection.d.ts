import { IConnectionOptions, Connection } from '../connection';

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
}
