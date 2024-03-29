/*
 * This file has been generated.
 */
import { OcaDelayUnit } from './OcaDelayUnit.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { Struct } from './Struct.js';

import { OcaDelayValue as type } from '../types/OcaDelayValue.js';

export const OcaDelayValue = Struct(
  {
    DelayValue: OcaFloat32,
    DelayUnit: OcaDelayUnit,
  },
  type
);
