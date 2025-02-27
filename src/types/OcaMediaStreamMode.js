/*
 * This file has been generated.
 */

export class OcaMediaStreamMode {
  /**
   * Current media stream mode descriptor.
   * @class OcaMediaStreamMode
   */
  constructor(
    FrameFormat,
    EncodingType,
    SamplingRate,
    ChannelCount,
    PacketTime
  ) {
    /**
     * Media frame format
     * @type OcaMediaFrameFormat
     */
    this.FrameFormat = FrameFormat;
    /**
     * Media encoding type
     * @type string
     */
    this.EncodingType = EncodingType;
    /**
     * Media sampling rate
     * @type number
     */
    this.SamplingRate = SamplingRate;
    /**
     * Number of signal channels in the stream
     * @type number
     */
    this.ChannelCount = ChannelCount;
    /**
     * Duration of the media signal fragment carried in a single network packet.
     * @type number
     */
    this.PacketTime = PacketTime;
  }
}
