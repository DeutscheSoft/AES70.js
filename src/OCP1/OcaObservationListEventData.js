/*
 * This file has been generated.
 */
import { OcaFloat64 } from './OcaFloat64.js';
import { OcaList } from './OcaList.js';
import { Struct } from './Struct.js';

import { OcaObservationListEventData as type } from '../types/OcaObservationListEventData.js';

export const OcaObservationListEventData = Struct(
  {
    Reading: OcaList(OcaFloat64),
  },
  type
);
