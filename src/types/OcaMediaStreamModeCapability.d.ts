/*
 * This file has been generated.
 */
import { IOcaInterval, OcaInterval } from './OcaInterval.js';
import {
  IOcaMediaFrameFormat,
  OcaMediaFrameFormat,
} from './OcaMediaFrameFormat.js';
import { IOcaMediaStreamModeCapabilityDirection } from './OcaMediaStreamModeCapabilityDirection.js';

export declare interface IOcaMediaStreamModeCapability {
  /**
   * ID of this capability
   * @type number
   */
  ID: number;

  /**
   * Arbitrary user-supplied name of this capability
   * @type string
   */
  Name: string;

  /**
   * Supported input/output direction - input, output, or both.
   * @type IOcaMediaStreamModeCapabilityDirection
   */
  Direction: IOcaMediaStreamModeCapabilityDirection;

  /**
   * Supported frame formats
   * @type OcaMediaFrameFormat[]
   */
  FrameFormatList: IOcaMediaFrameFormat[];

  /**
   * Supported encoding types
   * @type string[]
   */
  EncodingTypeList: string[];

  /**
   * Supported sampling rates
   * @type number[]
   */
  SamplingRateList: number[];

  /**
   * Supported channel count list. If both a list and a range are specified, the
   * capability includes all channel counts within the union of the two
   * constraints.
   * @type number[]
   */
  ChannelCountList: number[];

  /**
   * Supported channel count range. If both a list and a range are specified,
   * the capability includes all channel counts within the union of the two
   * constraints.
   * @type OcaInterval<number>
   */
  ChannelCountRange: IOcaInterval<number>;

  /**
   * Supported packet-time value list. If both a list and a range are specified,
   * the capability includes all packet times within the union of the two
   * constraints.
   * @type number[]
   */
  PacketTimeList: number[];

  /**
   * Range of supported packet-time values. If both a list and a range are
   * specified, the capability includes all packet times within the union of the
   * two constraints.
   * @type OcaInterval<number>
   */
  PacketTimeRange: IOcaInterval<number>;
}

export declare class OcaMediaStreamModeCapability
  implements IOcaMediaStreamModeCapability {
  /**
   * Media stream mode capability descriptor.
   * @class OcaMediaStreamModeCapability
   */
  constructor(
    ID: number,
    Name: string,
    Direction: IOcaMediaStreamModeCapabilityDirection,
    FrameFormatList: OcaMediaFrameFormat[],
    EncodingTypeList: string[],
    SamplingRateList: number[],
    ChannelCountList: number[],
    ChannelCountRange: OcaInterval<number>,
    PacketTimeList: number[],
    PacketTimeRange: OcaInterval<number>
  );

  /**
   * ID of this capability
   * @type number
   */
  ID: number;

  /**
   * Arbitrary user-supplied name of this capability
   * @type string
   */
  Name: string;

  /**
   * Supported input/output direction - input, output, or both.
   * @type IOcaMediaStreamModeCapabilityDirection
   */
  Direction: IOcaMediaStreamModeCapabilityDirection;

  /**
   * Supported frame formats
   * @type OcaMediaFrameFormat[]
   */
  FrameFormatList: OcaMediaFrameFormat[];

  /**
   * Supported encoding types
   * @type string[]
   */
  EncodingTypeList: string[];

  /**
   * Supported sampling rates
   * @type number[]
   */
  SamplingRateList: number[];

  /**
   * Supported channel count list. If both a list and a range are specified, the
   * capability includes all channel counts within the union of the two
   * constraints.
   * @type number[]
   */
  ChannelCountList: number[];

  /**
   * Supported channel count range. If both a list and a range are specified,
   * the capability includes all channel counts within the union of the two
   * constraints.
   * @type OcaInterval<number>
   */
  ChannelCountRange: OcaInterval<number>;

  /**
   * Supported packet-time value list. If both a list and a range are specified,
   * the capability includes all packet times within the union of the two
   * constraints.
   * @type number[]
   */
  PacketTimeList: number[];

  /**
   * Range of supported packet-time values. If both a list and a range are
   * specified, the capability includes all packet times within the union of the
   * two constraints.
   * @type OcaInterval<number>
   */
  PacketTimeRange: OcaInterval<number>;
}
