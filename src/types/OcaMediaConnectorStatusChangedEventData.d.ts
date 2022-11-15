/*
 * This file has been generated.
 */
import {
  OcaMediaConnectorStatus,
  IOcaMediaConnectorStatus,
} from './OcaMediaConnectorStatus';

export declare interface IOcaMediaConnectorStatusChangedEventData {
  /**
   * The status that has changed.
   * @type OcaMediaConnectorStatus
   */
  ConnectorStatus: IOcaMediaConnectorStatus;
}

export declare class OcaMediaConnectorStatusChangedEventData
  implements IOcaMediaConnectorStatusChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaMediaConnectorStatusChangedEventData
   */
  constructor(ConnectorStatus: OcaMediaConnectorStatus);
  /**
   * The status that has changed.
   * @type OcaMediaConnectorStatus
   */
  ConnectorStatus: OcaMediaConnectorStatus;
}
