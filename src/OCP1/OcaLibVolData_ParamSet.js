/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlob } from './OcaBlob.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaLibVolData_ParamSet = Struct({
  TargetBlockType: OcaUint32,
  ParData: OcaBlob,
});
