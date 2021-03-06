/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaFloat32 } from './OcaFloat32.js';

import { OcaMediaClockRate as type } from '../types/OcaMediaClockRate.js';

export const OcaMediaClockRate = Struct(
  {
    NominalRate: OcaFloat32,
    PullRange: OcaFloat32,
    Accuracy: OcaFloat32,
    JitterMax: OcaFloat32,
  },
  type
);
