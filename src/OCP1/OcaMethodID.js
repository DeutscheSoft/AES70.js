/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaUint16 } from './OcaUint16.js';

import { OcaMethodID as type } from '../types/OcaMethodID.js';

export const OcaMethodID = Struct(
  {
    DefLevel: OcaUint16,
    MethodIndex: OcaUint16,
  },
  type
);
