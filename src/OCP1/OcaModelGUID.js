/*
 * This file has been generated.
 */
import { OcaBlobFixedLen } from './OcaBlobFixedLen.js';
import { Struct } from './Struct.js';

import { OcaModelGUID as type } from '../types/OcaModelGUID.js';

export const OcaModelGUID = Struct(
  {
    Reserved: OcaBlobFixedLen(1),
    MfrCode: OcaBlobFixedLen(3),
    ModelCode: OcaBlobFixedLen(4),
  },
  type
);
