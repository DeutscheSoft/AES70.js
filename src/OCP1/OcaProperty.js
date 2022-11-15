/*
 * This file has been generated.
 */
import { OcaPropertyDescriptor } from './OcaPropertyDescriptor.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaProperty as type } from '../types/OcaProperty.js';

export const OcaProperty = Struct(
  {
    ONo: OcaUint32,
    Descriptor: OcaPropertyDescriptor,
  },
  type
);
