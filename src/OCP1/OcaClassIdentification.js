/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaUint16 } from './OcaUint16.js';
import { String16 } from './String16.js';

import { OcaClassIdentification as type } from '../types/OcaClassIdentification.js';

export const OcaClassIdentification = Struct(
  {
    ClassID: String16,
    ClassVersion: OcaUint16,
  },
  type
);
