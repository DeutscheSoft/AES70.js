/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { String16 } from './String16.js';

import { OcaManagerDescriptor as type } from '../types/OcaManagerDescriptor.js';

export const OcaManagerDescriptor = Struct(
  {
    ObjectNumber: OcaUint32,
    Name: OcaString,
    ClassID: String16,
    ClassVersion: OcaUint16,
  },
  type
);
