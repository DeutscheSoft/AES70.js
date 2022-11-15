/*
 * This file has been generated.
 */
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLibVolChangedEventData as type } from '../types/OcaLibVolChangedEventData.js';

export const OcaLibVolChangedEventData = Struct(
  {
    VolumeID: OcaUint32,
    ChangeType: OcaPropertyChangeType,
  },
  type
);
