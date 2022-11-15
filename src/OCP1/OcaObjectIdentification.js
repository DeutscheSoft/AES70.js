/*
 * This file has been generated.
 */
import { OcaClassIdentification } from './OcaClassIdentification.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaObjectIdentification as type } from '../types/OcaObjectIdentification.js';

export const OcaObjectIdentification = Struct(
  {
    ONo: OcaUint32,
    ClassIdentification: OcaClassIdentification,
  },
  type
);
