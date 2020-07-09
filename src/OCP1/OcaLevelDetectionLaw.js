import { Enum8 } from './Enum8.js';

/**
 * Enumeration of the types of level detector characteristics. Used in
 * dynamics classes and for sensors.
 * @category Types
 * @class OcaLevelDetectionLaw
 * @extends Enum8
 */
export const OcaLevelDetectionLaw = Enum8({
  None: 0,
  RMS: 1,
  Peak: 2,
});
