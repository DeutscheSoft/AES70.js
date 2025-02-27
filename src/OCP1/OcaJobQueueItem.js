/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaProgramRunMode } from './OcaProgramRunMode.js';
import { OcaUint32 } from './OcaUint32.js';
import { OcaVariant } from './OcaVariant.js';
import { OcaWhenPhysicalAbsolute } from './OcaWhenPhysicalAbsolute.js';
import { OcaWhenPhysicalRelative } from './OcaWhenPhysicalRelative.js';
import { Struct } from './Struct.js';

import { OcaJobQueueItem as type } from '../types/OcaJobQueueItem.js';

export const OcaJobQueueItem = Struct(
  {
    ID: OcaUint32,
    ProgramONo: OcaUint32,
    RunMode: OcaProgramRunMode,
    RunParameters: OcaBlob,
    RunWhen: OcaVariant(OcaWhenPhysicalAbsolute, OcaWhenPhysicalRelative),
    RunWhere: OcaUint32,
  },
  type
);
