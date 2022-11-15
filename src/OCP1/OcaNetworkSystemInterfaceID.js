/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { Struct } from './Struct.js';

import { OcaNetworkSystemInterfaceID as type } from '../types/OcaNetworkSystemInterfaceID.js';

export const OcaNetworkSystemInterfaceID = Struct(
  {
    SystemInterfaceHandle: OcaBlob,
    MyNetworkAddress: OcaBlob,
  },
  type
);
