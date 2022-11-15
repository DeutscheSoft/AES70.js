/*
 * This file has been generated.
 */
import { OcaEventID } from './OcaEventID.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaEvent as type } from '../types/OcaEvent.js';

export const OcaEvent = Struct(
  {
    EmitterONo: OcaUint32,
    EventID: OcaEventID,
  },
  type
);
