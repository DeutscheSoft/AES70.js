/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBlob } from './OcaBlob.js';

import { OcaNetworkSystemInterfaceDescriptor as type } from '../types/OcaNetworkSystemInterfaceDescriptor.js';

export const OcaNetworkSystemInterfaceDescriptor = Struct(
  {
    SystemInterfaceParameters: OcaBlob,
    MyNetworkAddress: OcaBlob,
  },
  type
);
