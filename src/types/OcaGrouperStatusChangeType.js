/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enum describing status change types, as used in <b>OcaGrouper's
 * StatusChange </b>event.
 */
export class OcaGrouperStatusChangeType extends Enum({
  citizenAdded: 1,
  citizenDeleted: 2,
  citizenConnectionLost: 3,
  citizenConnectionReEstablished: 4,
  citizenError: 5,
  enrollment: 6,
  unEnrollment: 7,
}) {}
