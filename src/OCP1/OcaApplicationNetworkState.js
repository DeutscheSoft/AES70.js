import { Enum8 } from './Enum8.js';

/**
 * Network states.
 * @category Types
 * @class OcaApplicationNetworkState
 * @extends Enum8
 */
export const OcaApplicationNetworkState = Enum8({
  Unknown: 0,
  NotReady: 1,
  Readying: 2,
  Ready: 3,
  Running: 4,
  Paused: 5,
  Stopping: 6,
  Stopped: 7,
  Fault: 8,
});
