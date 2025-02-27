/*
 * This file has been generated.
 */
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaTimeDeliveryParameters_StreamEndpoint as type } from '../types/OcaTimeDeliveryParameters_StreamEndpoint.js';

export const OcaTimeDeliveryParameters_StreamEndpoint = Struct(
  {
    EndpointOwner: OcaUint32,
    EndpointID: OcaUint32,
  },
  type
);
