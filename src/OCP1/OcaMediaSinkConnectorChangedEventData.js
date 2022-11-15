/*
 * This file has been generated.
 */
import { OcaMediaConnectorElement } from './OcaMediaConnectorElement.js';
import { OcaMediaSinkConnector } from './OcaMediaSinkConnector.js';
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';
import { Struct } from './Struct.js';

import { OcaMediaSinkConnectorChangedEventData as type } from '../types/OcaMediaSinkConnectorChangedEventData.js';

export const OcaMediaSinkConnectorChangedEventData = Struct(
  {
    SinkConnector: OcaMediaSinkConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: OcaMediaConnectorElement,
  },
  type
);
