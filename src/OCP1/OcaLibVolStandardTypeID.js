import { Enum8 } from './Enum8.js';

/**
 * Enum that describes type of data in a standard library volume.
 * @category Types
 * @class OcaLibVolStandardTypeID
 * @extends Enum8
 */
export const OcaLibVolStandardTypeID = Enum8({
  None: 0,
  ParamSet: 1,
  Patch: 2,
  Program: 3,
});
