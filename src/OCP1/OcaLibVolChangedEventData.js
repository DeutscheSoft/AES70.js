/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaLibVolChangedEventData as type } from '../types/OcaLibVolChangedEventData.js';

export const OcaLibVolChangedEventData = Struct(
  {
    Event: OcaEvent,
    VolumeID: OcaUint32,
    ChangeType: OcaPropertyChangeType,
  },
  type
);
