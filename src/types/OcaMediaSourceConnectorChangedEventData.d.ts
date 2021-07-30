/*
 * This file has been generated.
 */

import { OcaEvent, IOcaEvent } from './OcaEvent';
import {
  OcaMediaConnectorElement,
  IOcaMediaConnectorElement,
} from './OcaMediaConnectorElement';
import {
  OcaMediaSourceConnector,
  IOcaMediaSourceConnector,
} from './OcaMediaSourceConnector';
import {
  OcaPropertyChangeType,
  IOcaPropertyChangeType,
} from './OcaPropertyChangeType';

export declare interface IOcaMediaSourceConnectorChangedEventData {
  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: IOcaEvent;

  /**
   * The media source connector for which the changed event holds (i.e. that is added, deleted or changed).
   * @type OcaMediaSourceConnector
   */
  SourceConnector: IOcaMediaSourceConnector;

  /**
   * Indicates what type of change occurred. Only ItemAdded, ItemChanged and ItemDeleted can be used in this event data.
   * @type OcaPropertyChangeType
   */
  ChangeType: IOcaPropertyChangeType;

  /**
   * Indicates which element(s) of the connector changed. If the connector is added or deleted, all bits in this bitset shall be set.
   * @type number
   */
  ChangedElement: number;
}

export declare class OcaMediaSourceConnectorChangedEventData
  implements IOcaMediaSourceConnectorChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaMediaSourceConnectorChangedEventData
   */
  constructor(
    Event: OcaEvent,
    SourceConnector: OcaMediaSourceConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: number
  );

  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: OcaEvent;

  /**
   * The media source connector for which the changed event holds (i.e. that is added, deleted or changed).
   * @type OcaMediaSourceConnector
   */
  SourceConnector: OcaMediaSourceConnector;

  /**
   * Indicates what type of change occurred. Only ItemAdded, ItemChanged and ItemDeleted can be used in this event data.
   * @type OcaPropertyChangeType
   */
  ChangeType: OcaPropertyChangeType;

  /**
   * Indicates which element(s) of the connector changed. If the connector is added or deleted, all bits in this bitset shall be set.
   * @type number
   */
  ChangedElement: number;
}
