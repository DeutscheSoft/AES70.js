/*
 * This file has been generated.
 */
import { OcaTaskState } from './OcaTaskState.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaTaskStatus as type } from '../types/OcaTaskStatus.js';

export const OcaTaskStatus = Struct(
  {
    ID: OcaUint32,
    State: OcaTaskState,
    ErrorCode: OcaUint16,
  },
  type
);
