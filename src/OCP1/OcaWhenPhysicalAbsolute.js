/*
 * This file has been generated.
 */
import { OcaTime } from './OcaTime.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaWhenPhysicalAbsolute as type } from '../types/OcaWhenPhysicalAbsolute.js';

export const OcaWhenPhysicalAbsolute = Struct(
  {
    TimeRefONo: OcaUint32,
    Value: OcaTime,
  },
  type
);
