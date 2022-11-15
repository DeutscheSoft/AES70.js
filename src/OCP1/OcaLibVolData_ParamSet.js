/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLibVolData_ParamSet as type } from '../types/OcaLibVolData_ParamSet.js';

export const OcaLibVolData_ParamSet = Struct(
  {
    TargetBlockType: OcaUint32,
    ParData: OcaBlob,
  },
  type
);
