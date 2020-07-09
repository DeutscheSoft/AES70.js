import { Enum8 } from './Enum8.js';

/**
 * Network status enum.
 * @category Types
 * @class OcaNetworkStatus
 * @extends Enum8
 */
export const OcaNetworkStatus = Enum8({
  Unknown: 0,
  Ready: 1,
  StartingUp: 2,
  Stopped: 3,
});
