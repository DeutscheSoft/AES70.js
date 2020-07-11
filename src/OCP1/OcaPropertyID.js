/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaUint16 } from './OcaUint16.js';

import { OcaPropertyID as type } from '../types/OcaPropertyID.js';

export const OcaPropertyID = Struct(
  {
    DefLevel: OcaUint16,
    PropertyIndex: OcaUint16,
  },
  type
);
