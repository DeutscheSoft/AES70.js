/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaClassIdentification } from './OcaClassIdentification.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaProtoObjectIdentification as type } from '../types/OcaProtoObjectIdentification.js';

export const OcaProtoObjectIdentification = Struct(
  {
    POno: OcaUint32,
    ClassIdentification: OcaClassIdentification,
  },
  type
);
