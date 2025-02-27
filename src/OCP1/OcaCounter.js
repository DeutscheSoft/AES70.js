/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { OcaUint64 } from './OcaUint64.js';
import { Struct } from './Struct.js';

import { OcaCounter as type } from '../types/OcaCounter.js';

export const OcaCounter = Struct(
  {
    ID: OcaUint16,
    Value: OcaUint64,
    InitialValue: OcaUint64,
    Role: OcaString,
    Notifiers: OcaList(OcaUint32),
  },
  type
);
