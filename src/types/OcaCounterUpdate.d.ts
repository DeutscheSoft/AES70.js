/*
 * This file has been generated.
 */

export declare interface IOcaCounterUpdate {
  /**
   * Identifies Counterset within Device.
   * @type Uint8Array
   */
  CounterSetID: Uint8Array;

  /**
   * Identifies Counter within Counterset.
   * @type number
   */
  CounterID: number;

  /**
   * The Counter's value.
   * @type number|BigInt
   */
  Value: number | BigInt;
}

export declare class OcaCounterUpdate implements IOcaCounterUpdate {
  /**
   * Descriptor of a Counter update, used by **OcaCounterNotifier**, in its
   * **CounterUpdate()** event and its **GetLastUpdate()** method.
   * @class OcaCounterUpdate
   */
  constructor(
    CounterSetID: Uint8Array,
    CounterID: number,
    Value: number | BigInt
  );

  /**
   * Identifies Counterset within Device.
   * @type Uint8Array
   */
  CounterSetID: Uint8Array;

  /**
   * Identifies Counter within Counterset.
   * @type number
   */
  CounterID: number;

  /**
   * The Counter's value.
   * @type number|BigInt
   */
  Value: number | BigInt;
}
