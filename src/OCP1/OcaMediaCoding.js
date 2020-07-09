/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaMediaCoding = Struct({
  CodingSchemeID: OcaUint16,
  CodecParameters: OcaString,
  ClockONo: OcaUint32,
});
