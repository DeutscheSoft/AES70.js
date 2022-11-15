/*
 * This file has been generated.
 */
import { OcaPortID } from './OcaPortID.js';
import { OcaString } from './OcaString.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaPort as type } from '../types/OcaPort.js';

export const OcaPort = Struct(
  {
    Owner: OcaUint32,
    ID: OcaPortID,
    Name: OcaString,
  },
  type
);
