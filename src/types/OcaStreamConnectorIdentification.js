/*
 * This file has been generated.
 */

/**
 * A signal source or sink connector at the far end of a stream -
 * normally, in another device. Not all of the fields of this datatype
 * need be used. The fields used will depend on remote device type, media
 * transport network type, and media transport implementation. Normal
 * usage scenarios are: <ol> <li><b><u>Unicast input or output</u></b>:
 * The <b>OcaStream </b>object is instantiated in an
 * <b>OcaStreamConnector </b>object in the local device, and it links to
 * an <b>OcaStreamConnector </b>object in a remote device. </li>
 * <li><b><u>Multicast input</u></b><u>:</u> The <b>OcaStream </b>object
 * is instantiated in an <b>OcaStreamConnector </b>object in the local
 * device, and, it may or may not link to an <b>OcaStreamConnector
 * </b>object in a remote device. </li> <li><b><u>Multicast
 * output</u></b><u>:</u> The <b>OcaStream </b>object is instantiated in
 * an <b>OcaStreamConnector </b>object in the local device, but in this
 * case does <u>not </u>link to any specific remote connector object.
 * </li> </ol>
 */
export class OcaStreamConnectorIdentification {
  constructor(HostID, NetworkAddress, NodeID, StreamConnectorID) {
    /**
     * Public name or binary ID of host in which this connector resides.
     * @member RemoteControlClasses.OcaStreamConnectorIdentification#OnHostIDChanged {PropertyEvent<OcaNetworkHostID>} - This event is emitted when HostID changes in the remote object.
     */
    this.HostID = HostID;
    /**
     * Network address of host in which this connector resides.
     * @member RemoteControlClasses.OcaStreamConnectorIdentification#OnNetworkAddressChanged {PropertyEvent<OcaNetworkAddress>} - This event is emitted when NetworkAddress changes in the remote object.
     */
    this.NetworkAddress = NetworkAddress;
    /**
     * Public name or binary ID of node within the host to which this
     * connector belongs.
     * @member RemoteControlClasses.OcaStreamConnectorIdentification#OnNodeIDChanged {PropertyEvent<OcaNetworkNodeID>} - This event is emitted when NodeID changes in the remote object.
     */
    this.NodeID = NodeID;
    /**
     * Public name or binary ID of this stream connector.
     * @member RemoteControlClasses.OcaStreamConnectorIdentification#OnStreamConnectorIDChanged {PropertyEvent<OcaStreamConnectorID>} - This event is emitted when StreamConnectorID changes in the remote object.
     */
    this.StreamConnectorID = StreamConnectorID;
  }
}
