/*
 * This file has been generated.
 */

export class OcaCounter {
  /**
   * A general-purpose Counter. See [AES70-1(Counters and Countersets)].
   * @class OcaCounter
   */
  constructor(ID, Value, InitialValue, Role, Notifiers) {
    /**
     * Counter identifier. Unique within enclosing Counterset.
     * @type number
     */
    this.ID = ID;
    /**
     * The count.
     * @type number|BigInt
     */
    this.Value = Value;
    /**
     * Value that a reset sets in the Counter.
     * @type number|BigInt
     */
    this.InitialValue = InitialValue;
    /**
     * Readonly name of Counter's function in context. Values beginning with
     * "oca" in any character case shall be reserved for AES use.
     * @type string
     */
    this.Role = Role;
    /**
     * List of ONos of Notifiers attached to this Counter. May be empty.
     * @type number[]
     */
    this.Notifiers = Notifiers;
  }
}
