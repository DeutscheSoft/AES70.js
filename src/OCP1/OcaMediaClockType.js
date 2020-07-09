import { Enum8 } from './Enum8.js';

/**
 * Types of media clocks.
 * @category Types
 * @class OcaMediaClockType
 * @extends Enum8
 */
export const OcaMediaClockType = Enum8({
  None: 0,
  Internal: 1,
  Network: 2,
  External: 3,
});
