import { Enum8 } from './Enum8.js';

/**
 * Enumeration of units of measure that can be used in OCA classes. Only
 * SI (base or derived) units are specified, so that internal
 * calculations will not need to convert. If conversion is needed it
 * should only be done in user interfaces. The datatype of a reading
 * expressed in one of these units of measure is FLOAT.
 * @category Types
 * @class OcaUnitOfMeasure
 * @extends Enum8
 */
export const OcaUnitOfMeasure = Enum8({
  Ampere: 4,
  DegreeCelsius: 2,
  Hertz: 1,
  None: 0,
  Ohm: 5,
  Volt: 3,
});
