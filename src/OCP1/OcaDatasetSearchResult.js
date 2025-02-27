/*
 * This file has been generated.
 */
import { OcaBlockMember } from './OcaBlockMember.js';
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaDatasetSearchResult as type } from '../types/OcaDatasetSearchResult.js';

export const OcaDatasetSearchResult = Struct(
  {
    Object: OcaBlockMember,
    Name: OcaString,
    Type: OcaString,
  },
  type
);
