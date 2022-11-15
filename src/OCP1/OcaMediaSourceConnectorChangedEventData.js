/*
 * This file has been generated.
 */
import { OcaMediaConnectorElement } from './OcaMediaConnectorElement.js';
import { OcaMediaSourceConnector } from './OcaMediaSourceConnector.js';
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';
import { Struct } from './Struct.js';

import { OcaMediaSourceConnectorChangedEventData as type } from '../types/OcaMediaSourceConnectorChangedEventData.js';

export const OcaMediaSourceConnectorChangedEventData = Struct(
  {
    SourceConnector: OcaMediaSourceConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: OcaMediaConnectorElement,
  },
  type
);
