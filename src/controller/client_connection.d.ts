import { IConnectionOptions, Connection } from '../connection';

export type IClientConnectionOptions = IConnectionOptions

/**
 * A generic base class for all client connections.
 */
export declare class ClientConnection extends Connection {
  constructor(options: IClientConnectionOptions);
}
