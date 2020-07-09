import { Enum8 } from './Enum8.js';

/**
 * Enumeration of level meter laws.
 * @category Types
 * @class OcaLevelMeterLaw
 * @extends Enum8
 */
export const OcaLevelMeterLaw = Enum8({
  VU: 1,
  StandardVU: 2,
  PPM1: 3,
  PPM2: 4,
  LKFS: 5,
  RMS: 6,
  Peak: 7,
  ProprietaryValueBase: 128,
});
