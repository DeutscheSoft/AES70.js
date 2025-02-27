/*
 * This file has been generated.
 */
import { OcaSamplingRateConverterType } from './OcaSamplingRateConverterType.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaPortClockMapEntry as type } from '../types/OcaPortClockMapEntry.js';

export const OcaPortClockMapEntry = Struct(
  {
    ClockONo: OcaUint32,
    SRCType: OcaSamplingRateConverterType,
  },
  type
);
