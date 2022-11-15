/*
 * This file has been generated.
 */
import { OcaBlobFixedLen } from './OcaBlobFixedLen.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint8 } from './OcaUint8.js';
import { Struct } from './Struct.js';

import { OcaClassAuthorityID as type } from '../types/OcaClassAuthorityID.js';

export const OcaClassAuthorityID = Struct(
  {
    Sentinel: OcaUint16,
    Reserved: OcaUint8,
    OrganizationID: OcaBlobFixedLen(3),
  },
  type
);
