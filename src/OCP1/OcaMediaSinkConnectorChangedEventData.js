/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaMediaConnectorElement } from './OcaMediaConnectorElement.js';
import { OcaMediaSinkConnector } from './OcaMediaSinkConnector.js';
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';

import { OcaMediaSinkConnectorChangedEventData as type } from '../types/OcaMediaSinkConnectorChangedEventData.js';

export const OcaMediaSinkConnectorChangedEventData = Struct(
  {
    Event: OcaEvent,
    SinkConnector: OcaMediaSinkConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: OcaMediaConnectorElement,
  },
  type
);
