/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaMediaConnectorElement } from './OcaMediaConnectorElement.js';
import { OcaMediaSourceConnector } from './OcaMediaSourceConnector.js';
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';

export const OcaMediaSourceConnectorChangedEventData = Struct({
  Event: OcaEvent,
  SourceConnector: OcaMediaSourceConnector,
  ChangeType: OcaPropertyChangeType,
  ChangedElement: OcaMediaConnectorElement,
});
