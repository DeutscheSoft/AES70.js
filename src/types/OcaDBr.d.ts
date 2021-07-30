/*
 * This file has been generated.
 */

export declare interface IOcaDBr {
  /**
   * Absolute level in decibels relative to value of  **Ref**  property.
   * @type number
   */
  Value: number;

  /**
   * Reference level in dBz. See the definition of OcaDBz for an explanation of the dBz unit.
   * @type number
   */
  Ref: number;
}

export declare class OcaDBr implements IOcaDBr {
  /**
   * An absolute level expressed in dB above the given absolute reference level.
   * @class OcaDBr
   */
  constructor(Value: number, Ref: number);

  /**
   * Absolute level in decibels relative to value of  **Ref**  property.
   * @type number
   */
  Value: number;

  /**
   * Reference level in dBz. See the definition of OcaDBz for an explanation of the dBz unit.
   * @type number
   */
  Ref: number;
}
