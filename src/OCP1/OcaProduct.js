/*
 * This file has been generated.
 */
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaProduct as type } from '../types/OcaProduct.js';

export const OcaProduct = Struct(
  {
    Name: OcaString,
    ModelID: OcaString,
    RevisionLevel: OcaString,
    BrandName: OcaString,
    UUID: OcaString,
    Description: OcaString,
  },
  type
);
