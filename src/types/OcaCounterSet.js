/*
 * This file has been generated.
 */

export class OcaCounterSet {
  /**
   * A set of Counters
   * @class OcaCounterSet
   */
  constructor(ID, Counters) {
    /**
     * Nonvolatile, unique identifier of this Counterset within this Device.
     * @type Uint8Array
     */
    this.ID = ID;
    /**
     * List of Counters in this Counterset.
     * @type OcaCounter[]
     */
    this.Counters = Counters;
  }
}
