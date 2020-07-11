/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaUint32 } from './OcaUint32.js';
import { OcaUint64 } from './OcaUint64.js';

import { OcaTimePTP as type } from '../types/OcaTimePTP.js';

export const OcaTimePTP = Struct(
  {
    Negative: OcaBoolean,
    Seconds: OcaUint64,
    Nanoseconds: OcaUint32,
  },
  type
);
