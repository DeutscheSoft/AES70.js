/*
 * This file has been generated.
 */

export class OcaWhenPhysicalAbsolute {
  /**
   * Absolute physical time.
   * @class OcaWhenPhysicalAbsolute
   */
  constructor(TimeRefONo, Value) {
    /**
     * ONo of an **OcaTimeSource** object or zero to use device time - 4 bytes
     * @type number
     */
    this.TimeRefONo = TimeRefONo;
    /**
     * Absolute physical time.
     * @type OcaTime
     */
    this.Value = Value;
  }
}
