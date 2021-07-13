/*
 * This file has been generated.
 */

export class OcaDBr {
  /**
   * An absolute level expressed in dB above the given absolute reference level.
   * @class OcaDBr
   */
  constructor(Value, Ref) {
    /**
     * Absolute level in decibels relative to value of  **Ref**  property.
     * @type number
     */
    this.Value = Value;
    /**
     * Reference level in dBz. See the definition of OcaDBz for an explanation of the dBz unit.
     * @type number
     */
    this.Ref = Ref;
  }
}
