/*
 * This file has been generated.
 */
import { OcaProtoPort } from './OcaProtoPort.js';
import { Struct } from './Struct.js';

import { OcaProtoSignalPath as type } from '../types/OcaProtoSignalPath.js';

export const OcaProtoSignalPath = Struct(
  {
    SourceProtoPort: OcaProtoPort,
    SinkProtoPort: OcaProtoPort,
  },
  type
);
