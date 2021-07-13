/*
 * This file has been generated.
 */

export class OcaMediaSourceConnector {
  /**
   * Media source (i.e. output) connector. Connects to an outbound stream. Collected by  **OcaMediaTransportNetwork** .
   * @class OcaMediaSourceConnector
   */
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
     * Map of stream pins (source channels) to OCA ports (input ports) of the owning  **OcaMediaNetwork** object. This defines what source channels are sent to the network. A pin is identified by an OcaUint16 with value 1..MaxPinCount. Not having a certain pin identifier in this map means that the pin is empty (i.e. not carrying a source channel).
     * @type Map
     */
    this.ChannelPinMap = ChannelPinMap;
    /**
     * Alignment level of the interface. Note that the dBFS value is referenced to the  *interface's* fullscale value, not to device's internal fullscale value.
     * @type number
     */
    this.AlignmentLevel = AlignmentLevel;
    /**
     * Coding currently used by this connector.
     * @type OcaMediaCoding
     */
    this.CurrentCoding = CurrentCoding;
  }
}
