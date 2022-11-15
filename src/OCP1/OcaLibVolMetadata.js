/*
 * This file has been generated.
 */
import { OcaLibAccess } from './OcaLibAccess.js';
import { OcaLibVolType } from './OcaLibVolType.js';
import { OcaString } from './OcaString.js';
import { OcaTimePTP } from './OcaTimePTP.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaLibVolMetadata as type } from '../types/OcaLibVolMetadata.js';

export const OcaLibVolMetadata = Struct(
  {
    Name: OcaString,
    VolType: OcaLibVolType,
    Access: OcaLibAccess,
    Version: OcaUint32,
    Creator: OcaString,
    UpDate: OcaTimePTP,
  },
  type
);
