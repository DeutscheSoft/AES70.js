/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaProtoPort } from './OcaProtoPort.js';

import { OcaProtoSignalPath as type } from '../types/OcaProtoSignalPath.js';

export const OcaProtoSignalPath = Struct(
  {
    SourceProtoPort: OcaProtoPort,
    SinkProtoPort: OcaProtoPort,
  },
  type
);
