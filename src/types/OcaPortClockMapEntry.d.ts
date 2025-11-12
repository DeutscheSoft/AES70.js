/*
 * This file has been generated.
 */
import {
  IOcaSamplingRateConverterType,
  OcaSamplingRateConverterType,
} from './OcaSamplingRateConverterType.js';

export declare interface IOcaPortClockMapEntry {
  /**
   * Object number of the **OcaMediaClock3** object that clocks this port.
   * @type number
   */
  ClockONo: number;

  /**
   * Sampling Rate Converter (SRC) type - none, asynchronous, synchronous.
   * @type OcaSamplingRateConverterType
   */
  SRCType: IOcaSamplingRateConverterType;
}

export declare class OcaPortClockMapEntry implements IOcaPortClockMapEntry {
  /**
   * Port clock map entry that describes the clocking and sample-rate conversion
   * (if any) of an **OcaPort**.
   * @class OcaPortClockMapEntry
   */
  constructor(ClockONo: number, SRCType: OcaSamplingRateConverterType);

  /**
   * Object number of the **OcaMediaClock3** object that clocks this port.
   * @type number
   */
  ClockONo: number;

  /**
   * Sampling Rate Converter (SRC) type - none, asynchronous, synchronous.
   * @type OcaSamplingRateConverterType
   */
  SRCType: OcaSamplingRateConverterType;
}
