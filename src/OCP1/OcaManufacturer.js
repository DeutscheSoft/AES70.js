/*
 * This file has been generated.
 */
import { OcaBlobFixedLen } from './OcaBlobFixedLen.js';
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaManufacturer as type } from '../types/OcaManufacturer.js';

export const OcaManufacturer = Struct(
  {
    Name: OcaString,
    OrganizationID: OcaBlobFixedLen(3),
    Website: OcaString,
    BusinessContact: OcaString,
    TechnicalContact: OcaString,
  },
  type
);
