/*
 * This file has been generated.
 */
import { OcaNetworkAdvertisingService } from './OcaNetworkAdvertisingService.js';
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaNetworkAdvertisingMechanism as type } from '../types/OcaNetworkAdvertisingMechanism.js';

export const OcaNetworkAdvertisingMechanism = Struct(
  {
    Service: OcaNetworkAdvertisingService,
    Parameters: OcaString,
  },
  type
);
