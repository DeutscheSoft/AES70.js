/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaLibVolIdentifier } from './OcaLibVolIdentifier.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaLibParamSetAssignment as type } from '../types/OcaLibParamSetAssignment.js';

export const OcaLibParamSetAssignment = Struct(
  {
    ParamSetIdentifier: OcaLibVolIdentifier,
    TargetBlockONo: OcaUint32,
  },
  type
);
