/*
 * This file has been generated.
 */
import { OcaSamplingRateConverterType } from './OcaSamplingRateConverterType.js';
import { OcaUint32 } from './OcaUint32.js';
import { OcaVariant } from './OcaVariant.js';
import { Struct } from './Struct.js';

import { OcaProtoPortClockMapEntry as type } from '../types/OcaProtoPortClockMapEntry.js';

export const OcaProtoPortClockMapEntry = Struct(
  {
    ClockONo: OcaVariant(OcaUint32, OcaUint32),
    SRCType: OcaSamplingRateConverterType,
  },
  type
);
