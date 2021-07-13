/*
 * This file has been generated.
 */

export class OcaTimePTP {
  /**
   * An absolute or relative PTP time. Format is standard PTP format: - 48 bit integer seconds - 32 bit integer nanoseconds PLUS a boolean sign (positive=TRUE) field. Absolute times are always positive. Relative times may be positive or negative.
   * @class OcaTimePTP
   */
  constructor(Negative, Seconds, Nanoseconds) {
    /**
     * TRUE if and only if time value is negative. Absolute times are always positive.
     * @type boolean
     */
    this.Negative = Negative;
    /**
     * 48 bits of seconds
     * @type number|BigInt
     */
    this.Seconds = Seconds;
    /**
     * 32 bits of nano seconds
     * @type number
     */
    this.Nanoseconds = Nanoseconds;
  }
}
