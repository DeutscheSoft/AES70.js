/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { FieldType } from './FieldType.js';
import { OcaUint16 } from './OcaUint16.js';

import { OcaClassID as type } from '../types/OcaClassID.js';

export const OcaClassID = Struct(
  {
    FieldCount: OcaUint16,
    Fields: FieldType,
  },
  type
);
