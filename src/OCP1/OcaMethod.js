/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaMethodID } from './OcaMethodID.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaMethod as type } from '../types/OcaMethod.js';

export const OcaMethod = Struct(
  {
    ONo: OcaUint32,
    MethodID: OcaMethodID,
  },
  type
);
