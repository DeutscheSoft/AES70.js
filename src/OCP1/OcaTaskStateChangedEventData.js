/*
 * This file has been generated.
 */
import { OcaLibVolIdentifier } from './OcaLibVolIdentifier.js';
import { OcaTaskStatus } from './OcaTaskStatus.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaTaskStateChangedEventData as type } from '../types/OcaTaskStateChangedEventData.js';

export const OcaTaskStateChangedEventData = Struct(
  {
    TaskID: OcaUint32,
    ProgramID: OcaLibVolIdentifier,
    Status: OcaTaskStatus,
  },
  type
);
