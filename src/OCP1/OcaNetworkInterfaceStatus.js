/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaNetworkInterfaceState } from './OcaNetworkInterfaceState.js';
import { Struct } from './Struct.js';

import { OcaNetworkInterfaceStatus as type } from '../types/OcaNetworkInterfaceStatus.js';

export const OcaNetworkInterfaceStatus = Struct(
  {
    State: OcaNetworkInterfaceState,
    AdaptationData: OcaBlob,
  },
  type
);
