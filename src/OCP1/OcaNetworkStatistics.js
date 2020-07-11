/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaNetworkStatistics as type } from '../types/OcaNetworkStatistics.js';

export const OcaNetworkStatistics = Struct(
  {
    rxPacketErrors: OcaUint32,
    txPacketErrors: OcaUint32,
  },
  type
);
