/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaPortID } from './OcaPortID.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaPort = Struct({
  Owner: OcaUint32,
  ID: OcaPortID,
  Name: OcaString,
});
