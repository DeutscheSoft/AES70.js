/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaMediaStreamCastMode } from './OcaMediaStreamCastMode.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaMediaConnection as type } from '../types/OcaMediaConnection.js';

export const OcaMediaConnection = Struct(
  {
    Secure: OcaBoolean,
    StreamParameters: OcaBlob,
    StreamCastMode: OcaMediaStreamCastMode,
    StreamChannelCount: OcaUint16,
  },
  type
);
