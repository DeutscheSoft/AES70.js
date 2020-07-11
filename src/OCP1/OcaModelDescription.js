/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaString } from './OcaString.js';

import { OcaModelDescription as type } from '../types/OcaModelDescription.js';

export const OcaModelDescription = Struct(
  {
    Manufacturer: OcaString,
    Name: OcaString,
    Version: OcaString,
  },
  type
);
