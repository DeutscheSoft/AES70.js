/*
 * This file has been generated.
 */

export class OcaStreamConnectorIdentification {
  /**
   * A signal source or sink connector at the far end of a stream - normally, in
   * another device. Not all of the fields of this datatype need be used. The
   * fields used will depend on remote device type, media transport network
   * type, and media transport implementation. Normal usage scenarios are:
   *
   *  - **Unicast input or output**: The **OcaStream** object is instantiated in
   *    an **OcaStreamConnector** object in the local device, and it links to an
   *    **OcaStreamConnector** object in a remote device.
   *
   *  - **Multicast input**: The **OcaStream** object is instantiated in an
   *    **OcaStreamConnector** object in the local device, and, it may or may
   *    not link to an **OcaStreamConnector** object in a remote device.
   *
   *  - **Multicast output**: The **OcaStream** object is instantiated in an
   *    **OcaStreamConnector** object in the local device, but in this case does
   *    not link to any specific remote connector object.
   *
   *
   * @class OcaStreamConnectorIdentification
   */
  constructor(HostID, NetworkAddress, NodeID, StreamConnectorID) {
    /**
     * Public name or binary ID of host in which this connector resides.
     * @type Uint8Array
     */
    this.HostID = HostID;
    /**
     * Network address of host in which this connector resides.
     * @type Uint8Array
     */
    this.NetworkAddress = NetworkAddress;
    /**
     * Public name or binary ID of node within the host to which this connector
     * belongs.
     * @type Uint8Array
     */
    this.NodeID = NodeID;
    /**
     * Public name or binary ID of this stream connector.
     * @type Uint8Array
     */
    this.StreamConnectorID = StreamConnectorID;
  }
}
