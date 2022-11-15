/*
 * This file has been generated.
 */
import { OcaBlobFixedLen } from './OcaBlobFixedLen.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaGlobalTypeIdentifier as type } from '../types/OcaGlobalTypeIdentifier.js';

export const OcaGlobalTypeIdentifier = Struct(
  {
    Authority: OcaBlobFixedLen(3),
    ID: OcaUint32,
  },
  type
);
