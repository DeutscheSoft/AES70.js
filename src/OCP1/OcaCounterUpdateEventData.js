/*
 * This file has been generated.
 */
import { OcaCounterUpdate } from './OcaCounterUpdate.js';
import { OcaList } from './OcaList.js';
import { Struct } from './Struct.js';

import { OcaCounterUpdateEventData as type } from '../types/OcaCounterUpdateEventData.js';

export const OcaCounterUpdateEventData = Struct(
  {
    Updates: OcaList(OcaCounterUpdate),
  },
  type
);
