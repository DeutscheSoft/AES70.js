import { Enum8 } from './Enum8.js';

/**
 * Physical location of a device power supply.
 * @category Types
 * @class OcaPowerSupplyLocation
 * @extends Enum8
 */
export const OcaPowerSupplyLocation = Enum8({
  Unspecified: 1,
  Internal: 2,
  External: 3,
});
