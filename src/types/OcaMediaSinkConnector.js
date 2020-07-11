/*
 * This file has been generated.
 */

/**
 * Media sink (i.e. input) connector. Connects to an inbound stream.
 * Collected by <b>OcaMediaTransportNetwork</b>.
 */
export class OcaMediaSinkConnector {
  constructor(
    IDInternal,
    IDExternal,
    Connection,
    AvailableCodings,
    PinCount,
    ChannelPinMap,
    AlignmentLevel,
    AlignmentGain,
    CurrentCoding
  ) {
    /**
     * Internal ID.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnIDInternalChanged {PropertyEvent<OcaMediaConnectorID>} - This event is emitted when IDInternal changes in the remote object.
     */
    this.IDInternal = IDInternal;
    /**
     * Public name of connector. May be published to the media transport
     * network, depending on the type of network.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnIDExternalChanged {PropertyEvent<string>} - This event is emitted when IDExternal changes in the remote object.
     */
    this.IDExternal = IDExternal;
    /**
     * Descriptor of the stream connection to this connector. If there is no
     * stream connected to this controller, (i.e. property Connected =
     * FALSE), the value of this property is undefined.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnConnectionChanged {PropertyEvent<OcaMediaConnection>} - This event is emitted when Connection changes in the remote object.
     */
    this.Connection = Connection;
    /**
     * List of codings available for this connector.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnAvailableCodingsChanged {PropertyEvent<array>} - This event is emitted when AvailableCodings changes in the remote object.
     */
    this.AvailableCodings = AvailableCodings;
    /**
     * Number of pins in this connector.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnPinCountChanged {PropertyEvent<int>} - This event is emitted when PinCount changes in the remote object.
     */
    this.PinCount = PinCount;
    /**
     * Map of stream pins (sink channels) to OCA ports (output ports) of the
     * owning <b>OcaMediaNetwork </b>object. This defines what pins that are
     * received from the network are sent to what OCA ports. A pin can only
     * carry one network channel, but can be sent to multiple ports. That is
     * why this data member is a multimap, a pin identifier can map to
     * multiple ports. A pin is identified by an OcaUint16 with value
     * 1..MaxPinCount. Not having a certain pin identifier in this map means
     * that the pin is empty (i.e. not carrying a sink channel). A pin
     * identifier cannot be part of the map more than MaxChannelsPerPin
     * times, unless MaxChannelsPerPin is zero.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnChannelPinMapChanged {PropertyEvent<OcaMultiMap>} - This event is emitted when ChannelPinMap changes in the remote object.
     */
    this.ChannelPinMap = ChannelPinMap;
    /**
     * Alignment level of the interface. Note that the dBFS value is
     * referenced to the <i>interface's </i>fullscale value, not to device's
     * internal fullscale value.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnAlignmentLevelChanged {PropertyEvent<OcaDBFS>} - This event is emitted when AlignmentLevel changes in the remote object.
     */
    this.AlignmentLevel = AlignmentLevel;
    /**
     * Alignment gain for the connector. This value will be applied to all
     * signals incoming through all pins.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnAlignmentGainChanged {PropertyEvent<OcaDB>} - This event is emitted when AlignmentGain changes in the remote object.
     */
    this.AlignmentGain = AlignmentGain;
    /**
     * Coding currently used by this connector.
     * @member RemoteControlClasses.OcaMediaSinkConnector#OnCurrentCodingChanged {PropertyEvent<OcaMediaCoding>} - This event is emitted when CurrentCoding changes in the remote object.
     */
    this.CurrentCoding = CurrentCoding;
  }
}
