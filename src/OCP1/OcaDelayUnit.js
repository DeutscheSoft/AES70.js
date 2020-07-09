import { Enum8 } from './Enum8.js';

/**
 * Enumeration of types of delay units that are available in OCA.
 * @category Types
 * @class OcaDelayUnit
 * @extends Enum8
 */
export const OcaDelayUnit = Enum8({
  Time: 1,
  Distance: 2,
  Samples: 3,
  Microseconds: 4,
  Milliseconds: 5,
  Centimeters: 6,
  Inches: 7,
  Feet: 8,
});
