/*
 * This file has been generated.
 */
import { OcaMediaStreamEndpointState } from './OcaMediaStreamEndpointState.js';
import { Struct } from './Struct.js';

import { OcaMediaTransportSessionConnectionState as type } from '../types/OcaMediaTransportSessionConnectionState.js';

export const OcaMediaTransportSessionConnectionState = Struct(
  {
    LocalEndpointState: OcaMediaStreamEndpointState,
    RemoteEndpointState: OcaMediaStreamEndpointState,
  },
  type
);
