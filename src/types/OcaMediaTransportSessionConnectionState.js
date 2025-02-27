/*
 * This file has been generated.
 */

export class OcaMediaTransportSessionConnectionState {
  /**
   * State of a stream connection belonging to an **OcaMediaTransportSession**
   * instance. The state of a stream connection is the union of the states of
   * its two endpoints.
   * @class OcaMediaTransportSessionConnectionState
   */
  constructor(LocalEndpointState, RemoteEndpointState) {
    /**
     * State of local endpoint of a connection.
     * @type OcaMediaStreamEndpointState
     */
    this.LocalEndpointState = LocalEndpointState;
    /**
     * State of remote endpoint of a connection.
     * @type OcaMediaStreamEndpointState
     */
    this.RemoteEndpointState = RemoteEndpointState;
  }
}
