/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { Struct } from './Struct.js';

import { OcaStreamConnectorIdentification as type } from '../types/OcaStreamConnectorIdentification.js';

export const OcaStreamConnectorIdentification = Struct(
  {
    HostID: OcaBlob,
    NetworkAddress: OcaBlob,
    NodeID: OcaBlob,
    StreamConnectorID: OcaBlob,
  },
  type
);
