/*
 * This file has been generated.
 */

export class OcaCounterUpdate {
  /**
   * Descriptor of a Counter update, used by **OcaCounterNotifier**, in its
   * **CounterUpdate()** event and its **GetLastUpdate()** method.
   * @class OcaCounterUpdate
   */
  constructor(CounterSetID, CounterID, Value) {
    /**
     * Identifies Counterset within Device.
     * @type Uint8Array
     */
    this.CounterSetID = CounterSetID;
    /**
     * Identifies Counter within Counterset.
     * @type number
     */
    this.CounterID = CounterID;
    /**
     * The Counter's value.
     * @type number|BigInt
     */
    this.Value = Value;
  }
}
