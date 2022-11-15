/*
 * This file has been generated.
 */
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaNetworkStatistics as type } from '../types/OcaNetworkStatistics.js';

export const OcaNetworkStatistics = Struct(
  {
    rxPacketErrors: OcaUint32,
    txPacketErrors: OcaUint32,
  },
  type
);
