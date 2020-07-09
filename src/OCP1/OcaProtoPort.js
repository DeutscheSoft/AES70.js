/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaProtoPortID } from './OcaProtoPortID.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaProtoPort = Struct({
  Owner: OcaUint32,
  ProtoID: OcaProtoPortID,
  Name: OcaString,
});
