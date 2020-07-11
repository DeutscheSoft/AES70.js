/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlob } from './OcaBlob.js';
import { OcaLibVolIdentifier } from './OcaLibVolIdentifier.js';
import { OcaString } from './OcaString.js';
import { OcaTimeMode } from './OcaTimeMode.js';
import { OcaTimePTP } from './OcaTimePTP.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaTask as type } from '../types/OcaTask.js';

export const OcaTask = Struct(
  {
    ID: OcaUint32,
    Label: OcaString,
    ProgramID: OcaLibVolIdentifier,
    GroupID: OcaUint16,
    TimeMode: OcaTimeMode,
    TimeSourceONo: OcaUint32,
    StartTime: OcaTimePTP,
    Duration: OcaTimePTP,
    ApplicationSpecificParameters: OcaBlob,
  },
  type
);
