/*
 * This file has been generated.
 */

export class OcaWhenPhysicalRelative {
  /**
   * Physical time relative to time of method call.
   * @class OcaWhenPhysicalRelative
   */
  constructor(TimeRefONo, Value) {
    /**
     * ONo of an **OcaTimeSource** object or zero to use device time
     * @type number
     */
    this.TimeRefONo = TimeRefONo;
    /**
     * Time relative to time when method using this datatype was called
     * @type OcaTime
     */
    this.Value = Value;
  }
}
