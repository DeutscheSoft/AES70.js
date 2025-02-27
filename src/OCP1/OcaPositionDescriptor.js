/*
 * This file has been generated.
 */
import { OcaArray1D } from './OcaArray1D.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaPositionCoordinateSystem } from './OcaPositionCoordinateSystem.js';
import { OcaPositionDescriptorFieldFlags } from './OcaPositionDescriptorFieldFlags.js';
import { Struct } from './Struct.js';

import { OcaPositionDescriptor as type } from '../types/OcaPositionDescriptor.js';

export const OcaPositionDescriptor = Struct(
  {
    CoordinateSystem: OcaPositionCoordinateSystem,
    FieldFlags: OcaPositionDescriptorFieldFlags,
    Values: OcaArray1D(OcaFloat32, 6),
  },
  type
);
