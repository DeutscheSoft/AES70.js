/*
 * This file has been generated.
 */

export declare interface IOcaTimePTP {
  /**
   * TRUE if and only if time value is negative. Absolute times are always
   * positive.
   * @type boolean
   */
  Negative: boolean;

  /**
   * 48 bits of seconds
   * @type number|BigInt
   */
  Seconds: number | BigInt;

  /**
   * 32 bits of nano seconds
   * @type number
   */
  Nanoseconds: number;
}

export declare class OcaTimePTP implements IOcaTimePTP {
  /**
   * An absolute or relative PTP time. Format is standard PTP format: - 48 bit
   * integer seconds - 32 bit integer nanoseconds PLUS a boolean sign
   * (positive=TRUE) field. Absolute times are always positive. Relative times
   * may be positive or negative.
   * @class OcaTimePTP
   */
  constructor(Negative: boolean, Seconds: number | BigInt, Nanoseconds: number);

  /**
   * TRUE if and only if time value is negative. Absolute times are always
   * positive.
   * @type boolean
   */
  Negative: boolean;

  /**
   * 48 bits of seconds
   * @type number|BigInt
   */
  Seconds: number | BigInt;

  /**
   * 32 bits of nano seconds
   * @type number
   */
  Nanoseconds: number;
}
