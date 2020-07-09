/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlob } from './OcaBlob.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaMediaStreamCastMode } from './OcaMediaStreamCastMode.js';
import { OcaUint16 } from './OcaUint16.js';

export const OcaMediaConnection = Struct({
  Secure: OcaBoolean,
  StreamParameters: OcaBlob,
  StreamCastMode: OcaMediaStreamCastMode,
  StreamChannelCount: OcaUint16,
});
