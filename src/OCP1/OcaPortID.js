/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaPortMode } from './OcaPortMode.js';
import { OcaUint16 } from './OcaUint16.js';

import { OcaPortID as type } from '../types/OcaPortID.js';

export const OcaPortID = Struct(
  {
    Mode: OcaPortMode,
    Index: OcaUint16,
  },
  type
);
