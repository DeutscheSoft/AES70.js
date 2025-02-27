/*
 * This file has been generated.
 */
import { OcaLibVolIdentifier } from './OcaLibVolIdentifier.js';
import { OcaTaskStatus } from './OcaTaskStatus.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaTaskStatusChangedEventData as type } from '../types/OcaTaskStatusChangedEventData.js';

export const OcaTaskStatusChangedEventData = Struct(
  {
    TaskID: OcaUint32,
    ProgramID: OcaLibVolIdentifier,
    Status: OcaTaskStatus,
  },
  type
);
