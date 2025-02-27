/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaCounter } from './OcaCounter.js';
import { OcaList } from './OcaList.js';
import { Struct } from './Struct.js';

import { OcaCounterSet as type } from '../types/OcaCounterSet.js';

export const OcaCounterSet = Struct(
  {
    ID: OcaBlob,
    Counters: OcaList(OcaCounter),
  },
  type
);
