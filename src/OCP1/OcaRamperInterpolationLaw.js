import { Enum8 } from './Enum8.js';

/**
 * Interpolation law for ramper to use.
 * @category Types
 * @class OcaRamperInterpolationLaw
 * @extends Enum8
 */
export const OcaRamperInterpolationLaw = Enum8({
  Linear: 1,
  ReverseLinear: 2,
  Sine: 3,
  Exponential: 4,
});
