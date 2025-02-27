/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaMediaTransportSessionConnection as type } from '../types/OcaMediaTransportSessionConnection.js';

export const OcaMediaTransportSessionConnection = Struct(
  {
    ID: OcaUint32,
    LocalEndpointID: OcaUint32,
    RemoteEndpointID: OcaBlob,
  },
  type
);
