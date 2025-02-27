/*
 * This file has been generated.
 */

export class OcaPortClockMapEntry {
  /**
   * Port clock map entry that describes the clocking and sample-rate conversion
   * (if any) of an **OcaPort**.
   * @class OcaPortClockMapEntry
   */
  constructor(ClockONo, SRCType) {
    /**
     * Object number of the **OcaMediaClock3** object that clocks this port.
     * @type number
     */
    this.ClockONo = ClockONo;
    /**
     * Sampling Rate Converter (SRC) type - none, asynchronous, synchronous.
     * @type OcaSamplingRateConverterType
     */
    this.SRCType = SRCType;
  }
}
