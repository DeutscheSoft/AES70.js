/*
 * This file has been generated.
 */
import { OcaFloat32 } from './OcaFloat32.js';
import { Struct } from './Struct.js';

import { OcaImpedance as type } from '../types/OcaImpedance.js';

export const OcaImpedance = Struct(
  {
    Magnitude: OcaFloat32,
    Phase: OcaFloat32,
  },
  type
);
