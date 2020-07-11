/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaMediaConnectorState } from './OcaMediaConnectorState.js';
import { OcaUint16 } from './OcaUint16.js';

import { OcaMediaConnectorStatus as type } from '../types/OcaMediaConnectorStatus.js';

export const OcaMediaConnectorStatus = Struct(
  {
    ConnectorID: OcaUint16,
    State: OcaMediaConnectorState,
    ErrorCode: OcaUint16,
  },
  type
);
