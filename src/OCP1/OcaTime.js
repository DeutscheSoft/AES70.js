/*
 * This file has been generated.
 */
import { OcaBoolean } from './OcaBoolean.js';
import { OcaUint32 } from './OcaUint32.js';
import { OcaUint64 } from './OcaUint64.js';
import { Struct } from './Struct.js';

import { OcaTime as type } from '../types/OcaTime.js';

export const OcaTime = Struct(
  {
    Negative: OcaBoolean,
    Seconds: OcaUint64,
    Nanoseconds: OcaUint32,
  },
  type
);
