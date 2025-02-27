/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaList } from './OcaList.js';
import { OcaMap } from './OcaMap.js';
import { OcaMediaTransportSessionConnection } from './OcaMediaTransportSessionConnection.js';
import { OcaMediaTransportSessionConnectionState } from './OcaMediaTransportSessionConnectionState.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaMediaTransportSession as type } from '../types/OcaMediaTransportSession.js';

export const OcaMediaTransportSession = Struct(
  {
    IDInternal: OcaUint32,
    IDExternal: OcaBlob,
    UserLabel: OcaString,
    StreamingEnabled: OcaBoolean,
    AdaptationData: OcaBlob,
    Connections: OcaList(OcaMediaTransportSessionConnection),
    ConnectionStates: OcaMap(
      OcaUint32,
      OcaMediaTransportSessionConnectionState
    ),
  },
  type
);
