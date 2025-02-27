/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint64 } from './OcaUint64.js';
import { Struct } from './Struct.js';

import { OcaCounterUpdate as type } from '../types/OcaCounterUpdate.js';

export const OcaCounterUpdate = Struct(
  {
    CounterSetID: OcaBlob,
    CounterID: OcaUint16,
    Value: OcaUint64,
  },
  type
);
