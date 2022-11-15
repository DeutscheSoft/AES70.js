/*
 * This file has been generated.
 */
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLibVolIdentifier as type } from '../types/OcaLibVolIdentifier.js';

export const OcaLibVolIdentifier = Struct(
  {
    Library: OcaUint32,
    ID: OcaUint32,
  },
  type
);
