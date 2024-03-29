/*
 * This file has been generated.
 */
import { OcaBlobFixedLen } from './OcaBlobFixedLen.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLibVolType as type } from '../types/OcaLibVolType.js';

export const OcaLibVolType = Struct(
  {
    Authority: OcaBlobFixedLen(3),
    ID: OcaUint32,
  },
  type
);
