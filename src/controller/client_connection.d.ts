import { IConnectionOptions, Connection } from '../connection';

export interface IClientConnectionOptions extends IConnectionOptions {}

/**
 * A generic base class for all client connections.
 */
export declare class ClientConnection extends Connection {
  constructor(options: IClientConnectionOptions);
}
