/*
 * This file has been generated.
 */
import {
  IOcaMediaFrameFormat,
  OcaMediaFrameFormat,
} from './OcaMediaFrameFormat.js';

export declare interface IOcaMediaStreamMode {
  /**
   * Media frame format
   * @type OcaMediaFrameFormat
   */
  FrameFormat: IOcaMediaFrameFormat;

  /**
   * Media encoding type
   * @type string
   */
  EncodingType: string;

  /**
   * Media sampling rate
   * @type number
   */
  SamplingRate: number;

  /**
   * Number of signal channels in the stream
   * @type number
   */
  ChannelCount: number;

  /**
   * Duration of the media signal fragment carried in a single network packet.
   * @type number
   */
  PacketTime: number;
}

export declare class OcaMediaStreamMode implements IOcaMediaStreamMode {
  /**
   * Current media stream mode descriptor.
   * @class OcaMediaStreamMode
   */
  constructor(
    FrameFormat: OcaMediaFrameFormat,
    EncodingType: string,
    SamplingRate: number,
    ChannelCount: number,
    PacketTime: number
  );

  /**
   * Media frame format
   * @type OcaMediaFrameFormat
   */
  FrameFormat: OcaMediaFrameFormat;

  /**
   * Media encoding type
   * @type string
   */
  EncodingType: string;

  /**
   * Media sampling rate
   * @type number
   */
  SamplingRate: number;

  /**
   * Number of signal channels in the stream
   * @type number
   */
  ChannelCount: number;

  /**
   * Duration of the media signal fragment carried in a single network packet.
   * @type number
   */
  PacketTime: number;
}
