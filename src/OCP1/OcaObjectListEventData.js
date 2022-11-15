/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaObjectListEventData as type } from '../types/OcaObjectListEventData.js';

export const OcaObjectListEventData = Struct(
  {
    objectList: OcaList(OcaUint32),
  },
  type
);
