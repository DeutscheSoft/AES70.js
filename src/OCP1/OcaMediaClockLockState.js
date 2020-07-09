import { Enum8 } from './Enum8.js';

/**
 * Lock states of media clocks.
 * @category Types
 * @class OcaMediaClockLockState
 * @extends Enum8
 */
export const OcaMediaClockLockState = Enum8({
  Undefined: 0,
  Locked: 1,
  Synchronizing: 2,
  FreeRun: 3,
  Stopped: 4,
});
