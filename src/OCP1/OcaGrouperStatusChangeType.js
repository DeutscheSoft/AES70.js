import { Enum8 } from './Enum8.js';

/**
 * Enum describing status change types, as used in <b>OcaGrouper's
 * StatusChange </b>event.
 * @category Types
 * @class OcaGrouperStatusChangeType
 * @extends Enum8
 */
export const OcaGrouperStatusChangeType = Enum8({
  citizenAdded: 1,
  citizenDeleted: 2,
  citizenConnectionLost: 3,
  citizenConnectionReEstablished: 4,
  citizenError: 5,
  enrollment: 6,
  unEnrollment: 7,
});
