/*
 * This file has been generated.
 */
import { OcaTime } from './OcaTime.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaWhenPhysicalRelative as type } from '../types/OcaWhenPhysicalRelative.js';

export const OcaWhenPhysicalRelative = Struct(
  {
    TimeRefONo: OcaUint32,
    Value: OcaTime,
  },
  type
);
