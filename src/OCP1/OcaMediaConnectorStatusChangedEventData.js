/*
 * This file has been generated.
 */
import { OcaMediaConnectorStatus } from './OcaMediaConnectorStatus.js';
import { Struct } from './Struct.js';

import { OcaMediaConnectorStatusChangedEventData as type } from '../types/OcaMediaConnectorStatusChangedEventData.js';

export const OcaMediaConnectorStatusChangedEventData = Struct(
  {
    ConnectorStatus: OcaMediaConnectorStatus,
  },
  type
);
