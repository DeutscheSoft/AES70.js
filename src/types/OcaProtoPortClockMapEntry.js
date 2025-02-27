/*
 * This file has been generated.
 */

export class OcaProtoPortClockMapEntry {
  /**
   * Entry describing the clocking and sampling rate conversion (if any) of an
   * **OcaPort**. Stored in the **ProtoPortClockMap** property of
   * **OcaBlockFactoryAgent**.
   * @class OcaProtoPortClockMapEntry
   */
  constructor(ClockONo, SRCType) {
    /**
     * Object number of the **OcaMediaClock3** object that clocks this Port.
     * Value is either a prototype ONo or a regular ONo.
     * @type (number | number)
     */
    this.ClockONo = ClockONo;
    /**
     * Sampling rate converter type - none, asynchronous, synchronous.
     * @type OcaSamplingRateConverterType
     */
    this.SRCType = SRCType;
  }
}
