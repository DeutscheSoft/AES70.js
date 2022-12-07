/*
 * This file has been generated.
 */

export class OcaMediaClockRate {
  /**
   * Media clock nominal rate and associated parameters.
   * @class OcaMediaClockRate
   */
  constructor(NominalRate, PullRange, Accuracy, JitterMax) {
    /**
     * Nominal clock rate, in hertz.
     * @type number
     */
    this.NominalRate = NominalRate;
    /**
     * Pull range in hertz. Not all clock types will specify this. Use IEEE NaN
     * for unspecified value (OcaFrequency is IEEE floating-point).
     * @type number
     */
    this.PullRange = PullRange;
    /**
     * Accuracy in ppm. Not all clock types will specify this. Use IEEE NaN for
     * unspecified value.
     * @type number
     */
    this.Accuracy = Accuracy;
    /**
     * Maximum jitter in ppm. Not all clock types will specify this. Use IEEE
     * NaN for unspecified value.
     * @type number
     */
    this.JitterMax = JitterMax;
  }
}
