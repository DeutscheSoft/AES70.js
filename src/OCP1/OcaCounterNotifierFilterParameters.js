/*
 * This file has been generated.
 */
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaRelationalOperator } from './OcaRelationalOperator.js';
import { OcaUint64 } from './OcaUint64.js';
import { Struct } from './Struct.js';

import { OcaCounterNotifierFilterParameters as type } from '../types/OcaCounterNotifierFilterParameters.js';

export const OcaCounterNotifierFilterParameters = Struct(
  {
    Threshold: OcaUint64,
    Operator: OcaRelationalOperator,
    Period: OcaFloat32,
    CountDelta: OcaUint64,
  },
  type
);
