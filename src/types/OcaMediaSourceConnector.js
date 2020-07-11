/*
 * This file has been generated.
 */

/**
 * Media source (i.e. output) connector. Connects to an outbound stream.
 * Collected by <b>OcaMediaTransportNetwork</b>.
 */
export class OcaMediaSourceConnector {
  constructor(
    IDInternal,
    IDExternal,
    Connection,
    AvailableCodings,
    PinCount,
    ChannelPinMap,
    AlignmentLevel,
    CurrentCoding
  ) {
    /**
     * Internal ID.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnIDInternalChanged {PropertyEvent<OcaMediaConnectorID>} - This event is emitted when IDInternal changes in the remote object.
     */
    this.IDInternal = IDInternal;
    /**
     * Public name of connector. May be published to the media transport
     * network, depending on the type of network.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnIDExternalChanged {PropertyEvent<string>} - This event is emitted when IDExternal changes in the remote object.
     */
    this.IDExternal = IDExternal;
    /**
     * Descriptor of the stream connection to this connector. If there is no
     * stream connected to this controller, (i.e. property Connected =
     * FALSE), the value of this property is undefined.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnConnectionChanged {PropertyEvent<OcaMediaConnection>} - This event is emitted when Connection changes in the remote object.
     */
    this.Connection = Connection;
    /**
     * List of codings available for this connector.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnAvailableCodingsChanged {PropertyEvent<array>} - This event is emitted when AvailableCodings changes in the remote object.
     */
    this.AvailableCodings = AvailableCodings;
    /**
     * Number of pins in this connector.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnPinCountChanged {PropertyEvent<int>} - This event is emitted when PinCount changes in the remote object.
     */
    this.PinCount = PinCount;
    /**
     * Map of stream pins (source channels) to OCA ports (input ports) of the
     * owning <b>OcaMediaNetwork </b>object. This defines what source
     * channels are sent to the network. A pin is identified by an OcaUint16
     * with value 1..MaxPinCount. Not having a certain pin identifier in this
     * map means that the pin is empty (i.e. not carrying a source channel).
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnChannelPinMapChanged {PropertyEvent<mapping>} - This event is emitted when ChannelPinMap changes in the remote object.
     */
    this.ChannelPinMap = ChannelPinMap;
    /**
     * Alignment level of the interface. Note that the dBFS value is
     * referenced to the <i>interface's </i>fullscale value, not to device's
     * internal fullscale value.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnAlignmentLevelChanged {PropertyEvent<OcaDBFS>} - This event is emitted when AlignmentLevel changes in the remote object.
     */
    this.AlignmentLevel = AlignmentLevel;
    /**
     * Coding currently used by this connector.
     * @member RemoteControlClasses.OcaMediaSourceConnector#OnCurrentCodingChanged {PropertyEvent<OcaMediaCoding>} - This event is emitted when CurrentCoding changes in the remote object.
     */
    this.CurrentCoding = CurrentCoding;
  }
}
