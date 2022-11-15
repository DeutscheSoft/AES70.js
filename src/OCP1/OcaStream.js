/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaStreamConnectorIdentification } from './OcaStreamConnectorIdentification.js';
import { OcaStreamStatus } from './OcaStreamStatus.js';
import { OcaStreamType } from './OcaStreamType.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaStream as type } from '../types/OcaStream.js';

export const OcaStream = Struct(
  {
    ErrorNumber: OcaUint16,
    IDAdvertised: OcaBlob,
    Index: OcaUint16,
    Label: OcaString,
    LocalConnectorONo: OcaUint32,
    Priority: OcaUint16,
    RemoteConnectorIdentification: OcaStreamConnectorIdentification,
    Secure: OcaBoolean,
    Status: OcaStreamStatus,
    StreamParameters: OcaBlob,
    StreamType: OcaStreamType,
  },
  type
);
