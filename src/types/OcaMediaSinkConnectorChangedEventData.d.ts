/*
 * This file has been generated.
 */
import {
  IOcaMediaConnectorElement,
  OcaMediaConnectorElement,
} from './OcaMediaConnectorElement';
import {
  IOcaMediaSinkConnector,
  OcaMediaSinkConnector,
} from './OcaMediaSinkConnector';
import {
  IOcaPropertyChangeType,
  OcaPropertyChangeType,
} from './OcaPropertyChangeType';

export declare interface IOcaMediaSinkConnectorChangedEventData {
  /**
   * The media source connector for which the changed event holds (i.e. that is
   * added, deleted or changed).
   * @type OcaMediaSinkConnector
   */
  SinkConnector: IOcaMediaSinkConnector;

  /**
   * Indicates what type of change occurred. Only ItemAdded, ItemChanged and
   * ItemDeleted can be used in this event data.
   * @type OcaPropertyChangeType
   */
  ChangeType: IOcaPropertyChangeType;

  /**
   * Indicates which element(s) of the connector changed. If the connector is
   * added or deleted, all bits in this bitset shall be set.
   * @type OcaMediaConnectorElement
   */
  ChangedElement: IOcaMediaConnectorElement;
}

export declare class OcaMediaSinkConnectorChangedEventData
  implements IOcaMediaSinkConnectorChangedEventData {
  /**
   * @class OcaMediaSinkConnectorChangedEventData
   */
  constructor(
    SinkConnector: OcaMediaSinkConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: OcaMediaConnectorElement
  );

  /**
   * The media source connector for which the changed event holds (i.e. that is
   * added, deleted or changed).
   * @type OcaMediaSinkConnector
   */
  SinkConnector: OcaMediaSinkConnector;

  /**
   * Indicates what type of change occurred. Only ItemAdded, ItemChanged and
   * ItemDeleted can be used in this event data.
   * @type OcaPropertyChangeType
   */
  ChangeType: OcaPropertyChangeType;

  /**
   * Indicates which element(s) of the connector changed. If the connector is
   * added or deleted, all bits in this bitset shall be set.
   * @type OcaMediaConnectorElement
   */
  ChangedElement: OcaMediaConnectorElement;
}
