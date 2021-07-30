/*
 * This file has been generated.
 */

import { OcaDelayUnit, IOcaDelayUnit } from './OcaDelayUnit';

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
   * Multifield descriptor that defines a delay value element.
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
