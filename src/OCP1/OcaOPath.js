/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlob } from './OcaBlob.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaOPath as type } from '../types/OcaOPath.js';

export const OcaOPath = Struct(
  {
    HostID: OcaBlob,
    ONo: OcaUint32,
  },
  type
);
