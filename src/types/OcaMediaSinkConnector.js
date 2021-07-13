/*
 * This file has been generated.
 */

export class OcaMediaSinkConnector {
  /**
   * Media sink (i.e. input) connector. Connects to an inbound stream. Collected by  **OcaMediaTransportNetwork** .
   * @class OcaMediaSinkConnector
   */
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
     * @type number
     */
    this.IDInternal = IDInternal;
    /**
     * Public name of connector. May be published to the media transport network, depending on the type of network.
     * @type string
     */
    this.IDExternal = IDExternal;
    /**
     * Descriptor of the stream connection to this connector. If there is no stream connected to this controller, (i.e. property Connected = FALSE), the value of this property is undefined.
     * @type OcaMediaConnection
     */
    this.Connection = Connection;
    /**
     * List of codings available for this connector.
     * @type array
     */
    this.AvailableCodings = AvailableCodings;
    /**
     * Number of pins in this connector.
     * @type number
     */
    this.PinCount = PinCount;
    /**
     * Map of stream pins (sink channels) to OCA ports (output ports) of the owning  **OcaMediaNetwork** object. This defines what pins that are received from the network are sent to what OCA ports. A pin can only carry one network channel, but can be sent to multiple ports. That is why this data member is a multimap, a pin identifier can map to multiple ports. A pin is identified by an OcaUint16 with value 1..MaxPinCount. Not having a certain pin identifier in this map means that the pin is empty (i.e. not carrying a sink channel). A pin identifier cannot be part of the map more than MaxChannelsPerPin times, unless MaxChannelsPerPin is zero.
     * @type Map<number, OcaPortID[]>
     */
    this.ChannelPinMap = ChannelPinMap;
    /**
     * Alignment level of the interface. Note that the dBFS value is referenced to the  *interface's* fullscale value, not to device's internal fullscale value.
     * @type number
     */
    this.AlignmentLevel = AlignmentLevel;
    /**
     * Alignment gain for the connector. This value will be applied to all signals incoming through all pins.
     * @type number
     */
    this.AlignmentGain = AlignmentGain;
    /**
     * Coding currently used by this connector.
     * @type OcaMediaCoding
     */
    this.CurrentCoding = CurrentCoding;
  }
}
