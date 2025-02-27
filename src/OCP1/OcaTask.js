/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaLibVolIdentifier } from './OcaLibVolIdentifier.js';
import { OcaString } from './OcaString.js';
import { OcaTime } from './OcaTime.js';
import { OcaTimeMode } from './OcaTimeMode.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaTask as type } from '../types/OcaTask.js';

export const OcaTask = Struct(
  {
    ID: OcaUint32,
    Label: OcaString,
    ProgramID: OcaLibVolIdentifier,
    GroupID: OcaUint16,
    TimeMode: OcaTimeMode,
    TimeSourceONo: OcaUint32,
    StartTime: OcaTime,
    Duration: OcaFloat32,
    ApplicationSpecificParameters: OcaBlob,
  },
  type
);
