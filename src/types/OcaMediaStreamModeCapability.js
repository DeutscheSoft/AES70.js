/*
 * This file has been generated.
 */

export class OcaMediaStreamModeCapability {
  /**
   * Media stream mode capability descriptor.
   * @class OcaMediaStreamModeCapability
   */
  constructor(
    ID,
    Name,
    Direction,
    FrameFormatList,
    EncodingTypeList,
    SamplingRateList,
    ChannelCountList,
    ChannelCountRange,
    PacketTimeList,
    PacketTimeRange
  ) {
    /**
     * ID of this capability
     * @type number
     */
    this.ID = ID;
    /**
     * Arbitrary user-supplied name of this capability
     * @type string
     */
    this.Name = Name;
    /**
     * Supported input/output direction - input, output, or both.
     * @type IOcaMediaStreamModeCapabilityDirection
     */
    this.Direction = Direction;
    /**
     * Supported frame formats
     * @type OcaMediaFrameFormat[]
     */
    this.FrameFormatList = FrameFormatList;
    /**
     * Supported encoding types
     * @type string[]
     */
    this.EncodingTypeList = EncodingTypeList;
    /**
     * Supported sampling rates
     * @type number[]
     */
    this.SamplingRateList = SamplingRateList;
    /**
     * Supported channel count list. If both a list and a range are specified,
     * the capability includes all channel counts within the union of the two
     * constraints.
     * @type number[]
     */
    this.ChannelCountList = ChannelCountList;
    /**
     * Supported channel count range. If both a list and a range are specified,
     * the capability includes all channel counts within the union of the two
     * constraints.
     * @type OcaInterval<number>
     */
    this.ChannelCountRange = ChannelCountRange;
    /**
     * Supported packet-time value list. If both a list and a range are
     * specified, the capability includes all packet times within the union of
     * the two constraints.
     * @type number[]
     */
    this.PacketTimeList = PacketTimeList;
    /**
     * Range of supported packet-time values. If both a list and a range are
     * specified, the capability includes all packet times within the union of
     * the two constraints.
     * @type OcaInterval<number>
     */
    this.PacketTimeRange = PacketTimeRange;
  }
}
