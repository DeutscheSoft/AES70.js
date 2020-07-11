/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaLibVolIdentifier as type } from '../types/OcaLibVolIdentifier.js';

export const OcaLibVolIdentifier = Struct(
  {
    Library: OcaUint32,
    ID: OcaUint32,
  },
  type
);
