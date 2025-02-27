/*
 * This file has been generated.
 */
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaIP4Gateway as type } from '../types/OcaIP4Gateway.js';

export const OcaIP4Gateway = Struct(
  {
    DestinationPrefix: OcaString,
    GatewayAddress: OcaString,
    Metric: OcaUint16,
  },
  type
);
