/*
 * This file has been generated.
 */
import { IOcaCounter, OcaCounter } from './OcaCounter';

export declare interface IOcaCounterSet {
  /**
   * Nonvolatile, unique identifier of this Counterset within this Device.
   * @type Uint8Array
   */
  ID: Uint8Array;

  /**
   * List of Counters in this Counterset.
   * @type OcaCounter[]
   */
  Counters: IOcaCounter[];
}

export declare class OcaCounterSet implements IOcaCounterSet {
  /**
   * A set of Counters
   * @class OcaCounterSet
   */
  constructor(ID: Uint8Array, Counters: OcaCounter[]);

  /**
   * Nonvolatile, unique identifier of this Counterset within this Device.
   * @type Uint8Array
   */
  ID: Uint8Array;

  /**
   * List of Counters in this Counterset.
   * @type OcaCounter[]
   */
  Counters: OcaCounter[];
}
