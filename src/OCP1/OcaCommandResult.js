/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaLongBlob } from './OcaLongBlob.js';
import { OcaStatus } from './OcaStatus.js';
import { Struct } from './Struct.js';

import { OcaCommandResult as type } from '../types/OcaCommandResult.js';

export const OcaCommandResult = Struct(
  {
    Status: OcaStatus,
    Data: OcaList(OcaLongBlob),
  },
  type
);
