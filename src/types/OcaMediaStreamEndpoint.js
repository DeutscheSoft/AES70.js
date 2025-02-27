/*
 * This file has been generated.
 */

export class OcaMediaStreamEndpoint {
  /**
   * Media stream endpoint descriptor. Collected by
   * **OcaMediaTransportApplication**.
   * @class OcaMediaStreamEndpoint
   */
  constructor(
    IDInternal,
    IDExternal,
    Direction,
    UserLabel,
    NetworkAssignmentIDs,
    StreamModeCapabilityIDs,
    ClockONo,
    ChannelMapDynamic,
    ChannelMap,
    AlignmentLevel,
    CurrentStreamMode,
    SecurityType,
    StreamCastMode,
    AdaptationData,
    RedundantSetID
  ) {
    /**
     * Internal ID.
     * @type number
     */
    this.IDInternal = IDInternal;
    /**
     * Public identifier of endpoint. May be advertised on the network.
     * @type Uint8Array
     */
    this.IDExternal = IDExternal;
    /**
     * Input or output (input ``->`` samples flow into endpoint from network,
     * ``output->samples`` flow out of endpoint into network)
     * @type OcaIODirection
     */
    this.Direction = Direction;
    /**
     * Arbitrary user-settable label for endpoint.
     * @type string
     */
    this.UserLabel = UserLabel;
    /**
     * ID(s) of the Network Assignment(s) this endpoint is using.
     * @type number[]
     */
    this.NetworkAssignmentIDs = NetworkAssignmentIDs;
    /**
     * Media stream mode capabilities of this endpoint. List of indexes into
     * **OcaMediaTransportApplication.MediaStreamModeCapabilities**.
     * @type number[]
     */
    this.StreamModeCapabilityIDs = StreamModeCapabilityIDs;
    /**
     * ONo of **OcaMediaClock3** media clock for this endpoint.
     * @type number
     */
    this.ClockONo = ClockONo;
    /**
     * TRUE if and only if channel map may be modified at runtime.
     * @type boolean
     */
    this.ChannelMapDynamic = ChannelMapDynamic;
    /**
     * Map of this endpoint's signal channels to OCA Ports of the owning
     * **OcaMediaTransportApplication** object. Each input endpoint channel may
     * be mapped to zero or more **output** Ports; each output endpoint channel
     * may be mapped to at most one **input** Port.
     * @type Map<number, OcaPortID[]>
     */
    this.ChannelMap = ChannelMap;
    /**
     * Alignment Level of the endpoint. The dBFS value is referenced to the
     * endpoint's fullscale value, not to Device's internal fullscale value.
     * @type number
     */
    this.AlignmentLevel = AlignmentLevel;
    /**
     * Stream mode of current connection. If there is a no current connection,
     * value is undefined.
     * @type OcaMediaStreamMode
     */
    this.CurrentStreamMode = CurrentStreamMode;
    /**
     * Security type of this endpoint, if any.
     * @type OcaSecurityType
     */
    this.SecurityType = SecurityType;
    /**
     * Unicast or multicast
     * @type OcaMediaStreamCastMode
     */
    this.StreamCastMode = StreamCastMode;
    /**
     * Adaptation-specific connection data, e.g. IP addresses and ports of input
     * and output endpoints. Specific media transport adaptations will define
     * the fine-structure of this **OcaBlob**.
     * @type Uint8Array
     */
    this.AdaptationData = AdaptationData;
    /**
     * ID of redundant set this endpoint belongs to. Unique within
     * **OcaMediaTransportApplication** instance.
     * @type number
     */
    this.RedundantSetID = RedundantSetID;
  }
}
