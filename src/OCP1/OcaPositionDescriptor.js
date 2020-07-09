/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBitSet16 } from './OcaBitSet16.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaPositionCoordinateSystem } from './OcaPositionCoordinateSystem.js';

export const OcaPositionDescriptor = Struct({
  CoordinateSystem: OcaPositionCoordinateSystem,
  FieldFlags: OcaBitSet16,
  Values: OcaFloat32,
});
