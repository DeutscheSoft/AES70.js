/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaInt32 } from './OcaInt32.js';
import { OcaTime } from './OcaTime.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLogRecord as type } from '../types/OcaLogRecord.js';

export const OcaLogRecord = Struct(
  {
    FunctionalCategory: OcaUint32,
    Severity: OcaInt32,
    EmitterONo: OcaUint32,
    Timestamp: OcaTime,
    Payload: OcaBlob,
  },
  type
);
