/*
 * This file has been generated.
 */
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaIP6Gateway as type } from '../types/OcaIP6Gateway.js';

export const OcaIP6Gateway = Struct(
  {
    DestinationPrefix: OcaString,
    GatewayAddress: OcaString,
    Metric: OcaUint16,
  },
  type
);
