/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaMediaTransportSessionState } from './OcaMediaTransportSessionState.js';
import { Struct } from './Struct.js';

import { OcaMediaTransportSessionStatus as type } from '../types/OcaMediaTransportSessionStatus.js';

export const OcaMediaTransportSessionStatus = Struct(
  {
    State: OcaMediaTransportSessionState,
    AdaptationData: OcaBlob,
  },
  type
);
