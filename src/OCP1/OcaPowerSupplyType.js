import { Enum8 } from './Enum8.js';

/**
 * Type of power supply.
 * @category Types
 * @class OcaPowerSupplyType
 * @extends Enum8
 */
export const OcaPowerSupplyType = Enum8({
  None: 0,
  Mains: 1,
  Battery: 2,
  Phantom: 3,
  Solar: 4,
});
