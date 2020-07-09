/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlobFixedLen } from './OcaBlobFixedLen.js';

export const OcaModelGUID = Struct({
  Reserved: OcaBlobFixedLen(1),
  MfrCode: OcaBlobFixedLen(3),
  ModelCode: OcaBlobFixedLen(4),
});
