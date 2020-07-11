/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaPort } from './OcaPort.js';

import { OcaSignalPath as type } from '../types/OcaSignalPath.js';

export const OcaSignalPath = Struct(
  {
    SourcePort: OcaPort,
    SinkPort: OcaPort,
  },
  type
);
