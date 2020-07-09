/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaClassID } from './OcaClassID.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaManagerDescriptor = Struct({
  ObjectNumber: OcaUint32,
  Name: OcaString,
  ClassID: OcaClassID,
  ClassVersion: OcaUint16,
});
