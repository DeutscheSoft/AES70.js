/*
 * This file has been generated.
 */

export class OcaDelayValue {
  /**
   * Multifield descriptor that defines a delay value element. This datatype is
   * **deprecated** in AES70-2022.
   * @class OcaDelayValue
   */
  constructor(DelayValue, DelayUnit) {
    /**
     * The delay value.
     * @type number
     */
    this.DelayValue = DelayValue;
    /**
     * The unit of the delay value.
     * @type OcaDelayUnit
     */
    this.DelayUnit = DelayUnit;
  }
}
