/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaDeviceGenericState } from './OcaDeviceGenericState.js';
import { Struct } from './Struct.js';

import { OcaDeviceOperationalState as type } from '../types/OcaDeviceOperationalState.js';

export const OcaDeviceOperationalState = Struct(
  {
    Generic: OcaDeviceGenericState,
    Details: OcaBlob,
  },
  type
);
