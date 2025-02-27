/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaObjectIdentification } from './OcaObjectIdentification.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaActionObjectSearchResult as type } from '../types/OcaActionObjectSearchResult.js';

export const OcaActionObjectSearchResult = Struct(
  {
    Identification: OcaObjectIdentification,
    ContainerPath: OcaList(OcaUint32),
    Role: OcaString,
    Label: OcaString,
  },
  type
);
