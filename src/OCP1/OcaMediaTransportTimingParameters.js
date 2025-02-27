/*
 * This file has been generated.
 */
import { OcaFloat32 } from './OcaFloat32.js';
import { Struct } from './Struct.js';

import { OcaMediaTransportTimingParameters as type } from '../types/OcaMediaTransportTimingParameters.js';

export const OcaMediaTransportTimingParameters = Struct(
  {
    MinReceiveBufferCapacity: OcaFloat32,
    MaxReceiveBufferCapacity: OcaFloat32,
    TransmissionTimeVariation: OcaFloat32,
  },
  type
);
