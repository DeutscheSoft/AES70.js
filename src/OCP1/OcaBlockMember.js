/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaObjectIdentification } from './OcaObjectIdentification.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaBlockMember as type } from '../types/OcaBlockMember.js';

export const OcaBlockMember = Struct(
  {
    MemberObjectIdentification: OcaObjectIdentification,
    ContainerObjectNumber: OcaUint32,
  },
  type
);
