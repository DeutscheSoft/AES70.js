/*
 * This file has been generated.
 */
import { OcaMediaConnectorState } from './OcaMediaConnectorState.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaMediaConnectorStatus as type } from '../types/OcaMediaConnectorStatus.js';

export const OcaMediaConnectorStatus = Struct(
  {
    ConnectorID: OcaUint16,
    State: OcaMediaConnectorState,
    ErrorCode: OcaUint16,
  },
  type
);
