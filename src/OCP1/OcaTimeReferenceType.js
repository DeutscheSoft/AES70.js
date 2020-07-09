import { Enum8 } from './Enum8.js';

/**
 * Types of time references.
 * @category Types
 * @class OcaTimeReferenceType
 * @extends Enum8
 */
export const OcaTimeReferenceType = Enum8({
  Undefined: 0,
  Local: 1,
  Private: 2,
  GPS: 3,
  Galileo: 4,
  GLONASS: 5,
});
