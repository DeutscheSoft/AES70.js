/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaMediaConnectorStatus } from './OcaMediaConnectorStatus.js';

import { OcaMediaConnectorStatusChangedEventData as type } from '../types/OcaMediaConnectorStatusChangedEventData.js';

export const OcaMediaConnectorStatusChangedEventData = Struct(
  {
    Event: OcaEvent,
    ConnectorStatus: OcaMediaConnectorStatus,
  },
  type
);
