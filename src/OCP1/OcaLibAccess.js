import { Enum8 } from './Enum8.js';

/**
 * Library volume access modes
 * @category Types
 * @class OcaLibAccess
 * @extends Enum8
 */
export const OcaLibAccess = Enum8({
  None: 0,
  ReadOnly: 1,
  ReadExpand: 2,
  Full: 3,
});
