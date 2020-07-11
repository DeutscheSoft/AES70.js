/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEventID } from './OcaEventID.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaEvent as type } from '../types/OcaEvent.js';

export const OcaEvent = Struct(
  {
    EmitterONo: OcaUint32,
    EventID: OcaEventID,
  },
  type
);
