/*
 * This file has been generated.
 */
import {
  IOcaMediaConnectorStatus,
  OcaMediaConnectorStatus,
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
   * @class OcaMediaConnectorStatusChangedEventData
   */
  constructor(ConnectorStatus: OcaMediaConnectorStatus);

  /**
   * The status that has changed.
   * @type OcaMediaConnectorStatus
   */
  ConnectorStatus: OcaMediaConnectorStatus;
}
