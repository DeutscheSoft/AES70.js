/*
 * This file has been generated.
 */
import { OcaObjectIdentification } from './OcaObjectIdentification.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaBlockMember as type } from '../types/OcaBlockMember.js';

export const OcaBlockMember = Struct(
  {
    MemberObjectIdentification: OcaObjectIdentification,
    ContainerObjectNumber: OcaUint32,
  },
  type
);
