/*
 * This file has been generated.
 */
import { OcaGrouperStatusChangeType } from './OcaGrouperStatusChangeType.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaGrouperStatusChangeEventData as type } from '../types/OcaGrouperStatusChangeEventData.js';

export const OcaGrouperStatusChangeEventData = Struct(
  {
    groupIndex: OcaUint16,
    citizenIndex: OcaUint16,
    changeType: OcaGrouperStatusChangeType,
  },
  type
);
