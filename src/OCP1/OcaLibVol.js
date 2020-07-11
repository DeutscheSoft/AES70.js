/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlob } from './OcaBlob.js';
import { OcaLibVolMetadata } from './OcaLibVolMetadata.js';

import { OcaLibVol as type } from '../types/OcaLibVol.js';

export const OcaLibVol = Struct(
  {
    Metadata: OcaLibVolMetadata,
    Data: OcaBlob,
  },
  type
);
