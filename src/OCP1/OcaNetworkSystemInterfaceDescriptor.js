/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { Struct } from './Struct.js';

import { OcaNetworkSystemInterfaceDescriptor as type } from '../types/OcaNetworkSystemInterfaceDescriptor.js';

export const OcaNetworkSystemInterfaceDescriptor = Struct(
  {
    SystemInterfaceParameters: OcaBlob,
    MyNetworkAddress: OcaBlob,
  },
  type
);
