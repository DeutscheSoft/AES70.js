/*
 * This file has been generated.
 */
import {
  IOcaSamplingRateConverterType,
  OcaSamplingRateConverterType,
} from './OcaSamplingRateConverterType';

export declare interface IOcaProtoPortClockMapEntry {
  /**
   * Object number of the **OcaMediaClock3** object that clocks this Port. Value
   * is either a prototype ONo or a regular ONo.
   * @type (number | number)
   */
  ClockONo: number | number;

  /**
   * Sampling rate converter type - none, asynchronous, synchronous.
   * @type OcaSamplingRateConverterType
   */
  SRCType: IOcaSamplingRateConverterType;
}

export declare class OcaProtoPortClockMapEntry
  implements IOcaProtoPortClockMapEntry {
  /**
   * Entry describing the clocking and sampling rate conversion (if any) of an
   * **OcaPort**. Stored in the **ProtoPortClockMap** property of
   * **OcaBlockFactoryAgent**.
   * @class OcaProtoPortClockMapEntry
   */
  constructor(ClockONo: number | number, SRCType: OcaSamplingRateConverterType);

  /**
   * Object number of the **OcaMediaClock3** object that clocks this Port. Value
   * is either a prototype ONo or a regular ONo.
   * @type (number | number)
   */
  ClockONo: number | number;

  /**
   * Sampling rate converter type - none, asynchronous, synchronous.
   * @type OcaSamplingRateConverterType
   */
  SRCType: OcaSamplingRateConverterType;
}
