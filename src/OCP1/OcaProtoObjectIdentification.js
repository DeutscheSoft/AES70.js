/*
 * This file has been generated.
 */
import { OcaClassIdentification } from './OcaClassIdentification.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaProtoObjectIdentification as type } from '../types/OcaProtoObjectIdentification.js';

export const OcaProtoObjectIdentification = Struct(
  {
    POno: OcaUint32,
    ClassIdentification: OcaClassIdentification,
  },
  type
);
