/*
 * This file has been generated.
 */
import { OcaMethodID } from './OcaMethodID.js';
import { OcaStatus } from './OcaStatus.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaGroupException as type } from '../types/OcaGroupException.js';

export const OcaGroupException = Struct(
  {
    ONo: OcaUint32,
    MethodID: OcaMethodID,
    Status: OcaStatus,
  },
  type
);
