/*
 * This file has been generated.
 */
import { IOcaDelayUnit, OcaDelayUnit } from './OcaDelayUnit.js';

export declare interface IOcaDelayValue {
  /**
   * The delay value.
   * @type number
   */
  DelayValue: number;

  /**
   * The unit of the delay value.
   * @type OcaDelayUnit
   */
  DelayUnit: IOcaDelayUnit;
}

export declare class OcaDelayValue implements IOcaDelayValue {
  /**
   * Multifield descriptor that defines a delay value element. This datatype is
   * **deprecated** in AES70-2022.
   * @class OcaDelayValue
   */
  constructor(DelayValue: number, DelayUnit: OcaDelayUnit);

  /**
   * The delay value.
   * @type number
   */
  DelayValue: number;

  /**
   * The unit of the delay value.
   * @type OcaDelayUnit
   */
  DelayUnit: OcaDelayUnit;
}
