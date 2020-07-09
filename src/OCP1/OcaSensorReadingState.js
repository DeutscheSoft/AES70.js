import { Enum8 } from './Enum8.js';

/**
 * Enum that describes whether an <b>OcaSensor</b>'s current reading
 * value can be trusted, and if not, why not.
 * @category Types
 * @class OcaSensorReadingState
 * @extends Enum8
 */
export const OcaSensorReadingState = Enum8({
  Unknown: 0,
  Valid: 1,
  Underrange: 2,
  Overrange: 3,
  Error: 4,
});
