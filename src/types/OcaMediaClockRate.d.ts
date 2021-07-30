/*
 * This file has been generated.
 */

export declare interface IOcaMediaClockRate {
  /**
   * Nominal clock rate, in hertz.
   * @type number
   */
  NominalRate: number;

  /**
   * Pull range in hertz. Not all clock types will specify this. Use IEEE NaN for unspecified value (OcaFrequency is IEEE floating-point).
   * @type number
   */
  PullRange: number;

  /**
   * Accuracy in ppm. Not all clock types will specify this. Use IEEE NaN for unspecified value.
   * @type number
   */
  Accuracy: number;

  /**
   * Maximum jitter in ppm. Not all clock types will specify this. Use IEEE NaN for unspecified value.
   * @type number
   */
  JitterMax: number;
}

export declare class OcaMediaClockRate implements IOcaMediaClockRate {
  /**
   * Media clock nominal rate and associated parameters.
   * @class OcaMediaClockRate
   */
  constructor(
    NominalRate: number,
    PullRange: number,
    Accuracy: number,
    JitterMax: number
  );

  /**
   * Nominal clock rate, in hertz.
   * @type number
   */
  NominalRate: number;

  /**
   * Pull range in hertz. Not all clock types will specify this. Use IEEE NaN for unspecified value (OcaFrequency is IEEE floating-point).
   * @type number
   */
  PullRange: number;

  /**
   * Accuracy in ppm. Not all clock types will specify this. Use IEEE NaN for unspecified value.
   * @type number
   */
  Accuracy: number;

  /**
   * Maximum jitter in ppm. Not all clock types will specify this. Use IEEE NaN for unspecified value.
   * @type number
   */
  JitterMax: number;
}
