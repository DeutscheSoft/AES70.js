/*
 * This file has been generated.
 */
import { OcaPortID } from './OcaPortID.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaProtoPort as type } from '../types/OcaProtoPort.js';

export const OcaProtoPort = Struct(
  {
    Owner: OcaUint32,
    ProtoID: OcaPortID,
    Name: OcaString,
  },
  type
);
