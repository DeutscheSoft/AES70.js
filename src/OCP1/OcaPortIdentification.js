/*
 * This file has been generated.
 */
import { OcaPortID } from './OcaPortID.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaPortIdentification as type } from '../types/OcaPortIdentification.js';

export const OcaPortIdentification = Struct(
  {
    Owner: OcaUint32,
    ID: OcaPortID,
  },
  type
);
