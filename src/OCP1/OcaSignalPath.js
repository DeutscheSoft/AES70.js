/*
 * This file has been generated.
 */
import { OcaPort } from './OcaPort.js';
import { Struct } from './Struct.js';

import { OcaSignalPath as type } from '../types/OcaSignalPath.js';

export const OcaSignalPath = Struct(
  {
    SourcePort: OcaPort,
    SinkPort: OcaPort,
  },
  type
);
