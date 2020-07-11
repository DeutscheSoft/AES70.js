/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaLibVolType } from './OcaLibVolType.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaLibraryIdentifier as type } from '../types/OcaLibraryIdentifier.js';

export const OcaLibraryIdentifier = Struct(
  {
    Type: OcaLibVolType,
    ONo: OcaUint32,
  },
  type
);
