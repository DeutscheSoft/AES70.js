/*
 * This file has been generated.
 */
import { OcaIODirection } from './OcaIODirection.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaPortID as type } from '../types/OcaPortID.js';

export const OcaPortID = Struct(
  {
    Direction: OcaIODirection,
    Index: OcaUint16,
  },
  type
);
