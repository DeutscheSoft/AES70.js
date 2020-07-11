/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaOPath } from './OcaOPath.js';
import { OcaUint16 } from './OcaUint16.js';

import { OcaGrouperCitizen as type } from '../types/OcaGrouperCitizen.js';

export const OcaGrouperCitizen = Struct(
  {
    Index: OcaUint16,
    ObjectPath: OcaOPath,
    Online: OcaBoolean,
  },
  type
);
