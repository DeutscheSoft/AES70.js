/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaList } from './OcaList.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaObjectListEventData as type } from '../types/OcaObjectListEventData.js';

export const OcaObjectListEventData = Struct(
  {
    Event: OcaEvent,
    objectList: OcaList(OcaUint32),
  },
  type
);
