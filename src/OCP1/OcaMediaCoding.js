/*
 * This file has been generated.
 */
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaMediaCoding as type } from '../types/OcaMediaCoding.js';

export const OcaMediaCoding = Struct(
  {
    CodingSchemeID: OcaUint16,
    CodecParameters: OcaString,
    ClockONo: OcaUint32,
  },
  type
);
