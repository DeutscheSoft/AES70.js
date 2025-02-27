/*
 * This file has been generated.
 */

export declare interface IOcaTime {
  /**
   * TRUE if and only if time value is negative. Absolute times are always
   * positive.
   * @type boolean
   */
  Negative: boolean;

  /**
   * 64-bit integer whose value shall not exceed that of an unsigned 48 bit
   * integer.
   * @type number|BigInt
   */
  Seconds: number | BigInt;

  /**
   * 32 bits of nanoseconds
   * @type number
   */
  Nanoseconds: number;
}

export declare class OcaTime implements IOcaTime {
  /**
   * Absolute or relative time. Time values in PTP presentation format with
   * added sign. - 48 bit integer seconds - 32 bit integer nanoseconds - boolean
   * sign (positive=TRUE) field. Absolute times are always positive. Relative
   * times may be positive or negative.
   * @class OcaTime
   */
  constructor(Negative: boolean, Seconds: number | BigInt, Nanoseconds: number);

  /**
   * TRUE if and only if time value is negative. Absolute times are always
   * positive.
   * @type boolean
   */
  Negative: boolean;

  /**
   * 64-bit integer whose value shall not exceed that of an unsigned 48 bit
   * integer.
   * @type number|BigInt
   */
  Seconds: number | BigInt;

  /**
   * 32 bits of nanoseconds
   * @type number
   */
  Nanoseconds: number;
}
