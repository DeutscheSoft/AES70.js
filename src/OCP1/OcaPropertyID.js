/*
 * This file has been generated.
 */
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaPropertyID as type } from '../types/OcaPropertyID.js';

export const OcaPropertyID = Struct(
  {
    DefLevel: OcaUint16,
    PropertyIndex: OcaUint16,
  },
  type
);
