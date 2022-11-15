/*
 * This file has been generated.
 */
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaGrouperEnrollment as type } from '../types/OcaGrouperEnrollment.js';

export const OcaGrouperEnrollment = Struct(
  {
    GroupIndex: OcaUint16,
    CitizenIndex: OcaUint16,
  },
  type
);
