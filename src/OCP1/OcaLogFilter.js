/*
 * This file has been generated.
 */
import { OcaInt32 } from './OcaInt32.js';
import { OcaInterval } from './OcaInterval.js';
import { OcaTime } from './OcaTime.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLogFilter as type } from '../types/OcaLogFilter.js';

export const OcaLogFilter = Struct(
  {
    FunctionalCategory: OcaUint32,
    SeverityRange: OcaInterval(OcaInt32),
    EmitterONo: OcaUint32,
    TimestampRange: OcaInterval(OcaTime),
  },
  type
);
