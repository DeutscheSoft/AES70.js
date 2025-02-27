/*
 * This file has been generated.
 */

export class OcaTime {
  /**
   * Absolute or relative time. Time values in PTP presentation format with
   * added sign. - 48 bit integer seconds - 32 bit integer nanoseconds - boolean
   * sign (positive=TRUE) field. Absolute times are always positive. Relative
   * times may be positive or negative.
   * @class OcaTime
   */
  constructor(Negative, Seconds, Nanoseconds) {
    /**
     * TRUE if and only if time value is negative. Absolute times are always
     * positive.
     * @type boolean
     */
    this.Negative = Negative;
    /**
     * 64-bit integer whose value shall not exceed that of an unsigned 48 bit
     * integer.
     * @type number|BigInt
     */
    this.Seconds = Seconds;
    /**
     * 32 bits of nanoseconds
     * @type number
     */
    this.Nanoseconds = Nanoseconds;
  }
}
