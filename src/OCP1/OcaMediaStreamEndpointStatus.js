/*
 * This file has been generated.
 */
import { OcaMediaStreamEndpointState } from './OcaMediaStreamEndpointState.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaMediaStreamEndpointStatus as type } from '../types/OcaMediaStreamEndpointStatus.js';

export const OcaMediaStreamEndpointStatus = Struct(
  {
    State: OcaMediaStreamEndpointState,
    ErrorCode: OcaUint16,
  },
  type
);
