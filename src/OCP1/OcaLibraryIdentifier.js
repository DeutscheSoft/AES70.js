/*
 * This file has been generated.
 */
import { OcaLibVolType } from './OcaLibVolType.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLibraryIdentifier as type } from '../types/OcaLibraryIdentifier.js';

export const OcaLibraryIdentifier = Struct(
  {
    Type: OcaLibVolType,
    ONo: OcaUint32,
  },
  type
);
