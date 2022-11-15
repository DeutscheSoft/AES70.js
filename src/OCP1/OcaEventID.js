/*
 * This file has been generated.
 */
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaEventID as type } from '../types/OcaEventID.js';

export const OcaEventID = Struct(
  {
    DefLevel: OcaUint16,
    EventIndex: OcaUint16,
  },
  type
);
