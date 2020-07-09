import { Enum8 } from './Enum8.js';

/**
 * Enum describing property change type.
 * @category Types
 * @class OcaPropertyChangeType
 * @extends Enum8
 */
export const OcaPropertyChangeType = Enum8({
  CurrentChanged: 1,
  MinChanged: 2,
  MaxChanged: 3,
  ItemAdded: 4,
  ItemChanged: 5,
  ItemDeleted: 6,
});
