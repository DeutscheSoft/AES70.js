/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaFloat64 } from './OcaFloat64.js';
import { OcaList } from './OcaList.js';

import { OcaObservationListEventData as type } from '../types/OcaObservationListEventData.js';

export const OcaObservationListEventData = Struct(
  {
    Event: OcaEvent,
    Reading: OcaList(OcaFloat64),
  },
  type
);
