/*
 * This file has been generated.
 */
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaModelDescription as type } from '../types/OcaModelDescription.js';

export const OcaModelDescription = Struct(
  {
    Manufacturer: OcaString,
    Name: OcaString,
    Version: OcaString,
  },
  type
);
