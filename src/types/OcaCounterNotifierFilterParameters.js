/*
 * This file has been generated.
 */

export class OcaCounterNotifierFilterParameters {
  /**
   * Filter parameters for **OcaCountersetNotifier**.
   * @class OcaCounterNotifierFilterParameters
   */
  constructor(Threshold, Operator, Period, CountDelta) {
    /**
     * Threshold comparison value. If **Operator** is zero, no threshold test is
     * performed. See description of class **OcaCounterNotifier**.
     * @type number|BigInt
     */
    this.Threshold = Threshold;
    /**
     * Type of threshold comparison. See description of class
     * **OcaCounterNotifier**.
     * @type OcaRelationalOperator
     */
    this.Operator = Operator;
    /**
     * Period for periodic updates, in seconds. Zero value means no periodic
     * updates. See description of class **OcaCounterNotifier.**
     * @type number
     */
    this.Period = Period;
    /**
     * Count increment for "every-n-counts" updates. Absolute value, applies
     * when counter changes by +n or -n. Zero value means no "every-n"
     * notifications. See description of class **OcaCounterNotifier.**
     * @type number|BigInt
     */
    this.CountDelta = CountDelta;
  }
}
