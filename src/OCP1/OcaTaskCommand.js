import { Enum8 } from './Enum8.js';

/**
 * Commands controllers can send to OcaTasks to change their states
 * @category Types
 * @class OcaTaskCommand
 * @extends Enum8
 */
export const OcaTaskCommand = Enum8({
  None: 0,
  Prepare: 1,
  Enable: 2,
  Start: 3,
  Stop: 4,
  Abort: 5,
  Disable: 6,
  Clear: 7,
});
