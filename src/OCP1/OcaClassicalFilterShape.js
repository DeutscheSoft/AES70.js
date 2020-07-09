import { Enum8 } from './Enum8.js';

/**
 * Enumeration of classicalr filter types that can be used by OCA
 * objects.
 * @category Types
 * @class OcaClassicalFilterShape
 * @extends Enum8
 */
export const OcaClassicalFilterShape = Enum8({
  Butterworth: 1,
  Bessel: 2,
  Chebyshev: 3,
  LinkwitzRiley: 4,
});
