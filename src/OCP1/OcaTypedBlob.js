/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaTypedBlob as type } from '../types/OcaTypedBlob.js';

export const OcaTypedBlob = Struct(
  {
    ContentType: OcaString,
    Content: OcaBlob,
  },
  type
);
