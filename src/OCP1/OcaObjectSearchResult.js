/*
 * This file has been generated.
 */
import { OcaClassIdentification } from './OcaClassIdentification.js';
import { OcaList } from './OcaList.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaObjectSearchResult as type } from '../types/OcaObjectSearchResult.js';

export const OcaObjectSearchResult = Struct(
  {
    ONo: OcaUint32,
    ClassIdentification: OcaClassIdentification,
    ContainerPath: OcaList(OcaUint32),
    Role: OcaString,
    Label: OcaString,
  },
  type
);
