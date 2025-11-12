/*
 * This file has been generated.
 */
import {
  IOcaRelationalOperator,
  OcaRelationalOperator,
} from './OcaRelationalOperator.js';

export declare interface IOcaCounterNotifierFilterParameters {
  /**
   * Threshold comparison value. If **Operator** is zero, no threshold test is
   * performed. See description of class **OcaCounterNotifier**.
   * @type number|BigInt
   */
  Threshold: number | BigInt;

  /**
   * Type of threshold comparison. See description of class
   * **OcaCounterNotifier**.
   * @type OcaRelationalOperator
   */
  Operator: IOcaRelationalOperator;

  /**
   * Period for periodic updates, in seconds. Zero value means no periodic
   * updates. See description of class **OcaCounterNotifier.**
   * @type number
   */
  Period: number;

  /**
   * Count increment for "every-n-counts" updates. Absolute value, applies when
   * counter changes by +n or -n. Zero value means no "every-n" notifications.
   * See description of class **OcaCounterNotifier.**
   * @type number|BigInt
   */
  CountDelta: number | BigInt;
}

export declare class OcaCounterNotifierFilterParameters
  implements IOcaCounterNotifierFilterParameters {
  /**
   * Filter parameters for **OcaCountersetNotifier**.
   * @class OcaCounterNotifierFilterParameters
   */
  constructor(
    Threshold: number | BigInt,
    Operator: OcaRelationalOperator,
    Period: number,
    CountDelta: number | BigInt
  );

  /**
   * Threshold comparison value. If **Operator** is zero, no threshold test is
   * performed. See description of class **OcaCounterNotifier**.
   * @type number|BigInt
   */
  Threshold: number | BigInt;

  /**
   * Type of threshold comparison. See description of class
   * **OcaCounterNotifier**.
   * @type OcaRelationalOperator
   */
  Operator: OcaRelationalOperator;

  /**
   * Period for periodic updates, in seconds. Zero value means no periodic
   * updates. See description of class **OcaCounterNotifier.**
   * @type number
   */
  Period: number;

  /**
   * Count increment for "every-n-counts" updates. Absolute value, applies when
   * counter changes by +n or -n. Zero value means no "every-n" notifications.
   * See description of class **OcaCounterNotifier.**
   * @type number|BigInt
   */
  CountDelta: number | BigInt;
}
