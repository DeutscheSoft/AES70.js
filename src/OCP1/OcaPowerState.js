import { Enum8 } from './Enum8.js';

/**
 * Enumeration defining the power states that OCA devices can be in. The
 * state is returned by the device's Power Manager on request.
 * @category Types
 * @class OcaPowerState
 * @extends Enum8
 */
export const OcaPowerState = Enum8({
  None: 0,
  Working: 1,
  Standby: 2,
  Off: 3,
});
