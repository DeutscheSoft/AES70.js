/*
 * This file has been generated.
 */
import { IOcaMediaConnectorElement } from './OcaMediaConnectorElement';
import {
  IOcaMediaSourceConnector,
  OcaMediaSourceConnector,
} from './OcaMediaSourceConnector';
import {
  IOcaPropertyChangeType,
  OcaPropertyChangeType,
} from './OcaPropertyChangeType';

export declare interface IOcaMediaSourceConnectorChangedEventData {
  /**
   * The media source connector for which the changed event holds (i.e. that is
   * added, deleted or changed).
   * @type OcaMediaSourceConnector
   */
  SourceConnector: IOcaMediaSourceConnector;

  /**
   * Indicates what type of change occurred. Only ItemAdded, ItemChanged and
   * ItemDeleted can be used in this event data.
   * @type OcaPropertyChangeType
   */
  ChangeType: IOcaPropertyChangeType;

  /**
   * Indicates which element(s) of the connector changed. If the connector is
   * added or deleted, all bits in this bitset shall be set.
   * @type IOcaMediaConnectorElement
   */
  ChangedElement: IOcaMediaConnectorElement;
}

export declare class OcaMediaSourceConnectorChangedEventData
  implements IOcaMediaSourceConnectorChangedEventData {
  /**
   * @class OcaMediaSourceConnectorChangedEventData
   */
  constructor(
    SourceConnector: OcaMediaSourceConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: IOcaMediaConnectorElement
  );

  /**
   * The media source connector for which the changed event holds (i.e. that is
   * added, deleted or changed).
   * @type OcaMediaSourceConnector
   */
  SourceConnector: OcaMediaSourceConnector;

  /**
   * Indicates what type of change occurred. Only ItemAdded, ItemChanged and
   * ItemDeleted can be used in this event data.
   * @type OcaPropertyChangeType
   */
  ChangeType: OcaPropertyChangeType;

  /**
   * Indicates which element(s) of the connector changed. If the connector is
   * added or deleted, all bits in this bitset shall be set.
   * @type IOcaMediaConnectorElement
   */
  ChangedElement: IOcaMediaConnectorElement;
}
