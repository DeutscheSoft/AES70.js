/*
 * This file has been generated.
 */

export class OcaMediaTransportSessionConnection {
  /**
   * A Media Stream connection belonging to an **OcaMediaTransportSession**
   * instance.
   * @class OcaMediaTransportSessionConnection
   */
  constructor(ID, LocalEndpointID, RemoteEndpointID) {
    /**
     * Local ID of this connection, unique within OcaMediaTransportSession
     * instance.
     * @type number
     */
    this.ID = ID;
    /**
     * Value of the **IDInternal** property of the **OcaMediaStreamEndpoint**
     * descriptor that applies to the local endpoint of the connection.
     * @type number
     */
    this.LocalEndpointID = LocalEndpointID;
    /**
     * External ID of the remote endpoint of the connection. Typically, this
     * will be the value of the **IDexternal** property of the applicable
     * **OcaMediaStreamEndpoint** descriptor in the remote device.
     * @type Uint8Array
     */
    this.RemoteEndpointID = RemoteEndpointID;
  }
}
