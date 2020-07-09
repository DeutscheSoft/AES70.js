import { Enum8 } from './Enum8.js';

/**
 * Status of a device power supply.
 * @category Types
 * @class OcaPowerSupplyState
 * @extends Enum8
 */
export const OcaPowerSupplyState = Enum8({
  Off: 0,
  Unavailable: 1,
  Available: 2,
  Active: 3,
});
