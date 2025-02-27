/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaPropertyID } from './OcaPropertyID.js';
import { Struct } from './Struct.js';

import { OcaConstructionParameter as type } from '../types/OcaConstructionParameter.js';

export const OcaConstructionParameter = Struct(
  {
    ID: OcaPropertyID,
    Value: OcaBlob,
  },
  type
);
