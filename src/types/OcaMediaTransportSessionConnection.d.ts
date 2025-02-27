/*
 * This file has been generated.
 */

export declare interface IOcaMediaTransportSessionConnection {
  /**
   * Local ID of this connection, unique within OcaMediaTransportSession
   * instance.
   * @type number
   */
  ID: number;

  /**
   * Value of the **IDInternal** property of the **OcaMediaStreamEndpoint**
   * descriptor that applies to the local endpoint of the connection.
   * @type number
   */
  LocalEndpointID: number;

  /**
   * External ID of the remote endpoint of the connection. Typically, this will
   * be the value of the **IDexternal** property of the applicable
   * **OcaMediaStreamEndpoint** descriptor in the remote device.
   * @type Uint8Array
   */
  RemoteEndpointID: Uint8Array;
}

export declare class OcaMediaTransportSessionConnection
  implements IOcaMediaTransportSessionConnection {
  /**
   * A Media Stream connection belonging to an **OcaMediaTransportSession**
   * instance.
   * @class OcaMediaTransportSessionConnection
   */
  constructor(
    ID: number,
    LocalEndpointID: number,
    RemoteEndpointID: Uint8Array
  );

  /**
   * Local ID of this connection, unique within OcaMediaTransportSession
   * instance.
   * @type number
   */
  ID: number;

  /**
   * Value of the **IDInternal** property of the **OcaMediaStreamEndpoint**
   * descriptor that applies to the local endpoint of the connection.
   * @type number
   */
  LocalEndpointID: number;

  /**
   * External ID of the remote endpoint of the connection. Typically, this will
   * be the value of the **IDexternal** property of the applicable
   * **OcaMediaStreamEndpoint** descriptor in the remote device.
   * @type Uint8Array
   */
  RemoteEndpointID: Uint8Array;
}
