import { Enum8 } from './Enum8.js';

/**
 * Enumeration of the types of dynamics functions available from class
 * OcaDynamics.
 * @category Types
 * @class OcaDynamicsFunction
 * @extends Enum8
 */
export const OcaDynamicsFunction = Enum8({
  None: 0,
  Compress: 1,
  Limit: 2,
  Expand: 3,
  Gate: 4,
});
