/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaGrouperGroup as type } from '../types/OcaGrouperGroup.js';

export const OcaGrouperGroup = Struct(
  {
    Index: OcaUint16,
    Name: OcaString,
    ProxyONo: OcaUint32,
  },
  type
);
