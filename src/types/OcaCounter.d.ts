/*
 * This file has been generated.
 */

export declare interface IOcaCounter {
  /**
   * Counter identifier. Unique within enclosing Counterset.
   * @type number
   */
  ID: number;

  /**
   * The count.
   * @type number|BigInt
   */
  Value: number | BigInt;

  /**
   * Value that a reset sets in the Counter.
   * @type number|BigInt
   */
  InitialValue: number | BigInt;

  /**
   * Readonly name of Counter's function in context. Values beginning with "oca"
   * in any character case shall be reserved for AES use.
   * @type string
   */
  Role: string;

  /**
   * List of ONos of Notifiers attached to this Counter. May be empty.
   * @type number[]
   */
  Notifiers: number[];
}

export declare class OcaCounter implements IOcaCounter {
  /**
   * A general-purpose Counter. See [AES70-1(Counters and Countersets)].
   * @class OcaCounter
   */
  constructor(
    ID: number,
    Value: number | BigInt,
    InitialValue: number | BigInt,
    Role: string,
    Notifiers: number[]
  );

  /**
   * Counter identifier. Unique within enclosing Counterset.
   * @type number
   */
  ID: number;

  /**
   * The count.
   * @type number|BigInt
   */
  Value: number | BigInt;

  /**
   * Value that a reset sets in the Counter.
   * @type number|BigInt
   */
  InitialValue: number | BigInt;

  /**
   * Readonly name of Counter's function in context. Values beginning with "oca"
   * in any character case shall be reserved for AES use.
   * @type string
   */
  Role: string;

  /**
   * List of ONos of Notifiers attached to this Counter. May be empty.
   * @type number[]
   */
  Notifiers: number[];
}
