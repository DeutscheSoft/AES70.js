/*
 * This file has been generated.
 */
import {
  OcaMediaConnectorElement,
  IOcaMediaConnectorElement,
} from './OcaMediaConnectorElement';
import {
  OcaMediaSinkConnector,
  IOcaMediaSinkConnector,
} from './OcaMediaSinkConnector';
import {
  OcaPropertyChangeType,
  IOcaPropertyChangeType,
} from './OcaPropertyChangeType';

export declare interface IOcaMediaSinkConnectorChangedEventData {
  /**
   * The media source connector for which the changed event holds (i.e. that is added, deleted or changed).
   * @type OcaMediaSinkConnector
   */
  SinkConnector: IOcaMediaSinkConnector;

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

export declare class OcaMediaSinkConnectorChangedEventData
  implements IOcaMediaSinkConnectorChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaMediaSinkConnectorChangedEventData
   */
  constructor(
    SinkConnector: OcaMediaSinkConnector,
    ChangeType: OcaPropertyChangeType,
    ChangedElement: number
  );
  /**
   * The media source connector for which the changed event holds (i.e. that is added, deleted or changed).
   * @type OcaMediaSinkConnector
   */
  SinkConnector: OcaMediaSinkConnector;

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
