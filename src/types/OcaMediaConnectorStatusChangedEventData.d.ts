/*
 * This file has been generated.
 */

import { OcaEvent, IOcaEvent } from './OcaEvent';
import {
  OcaMediaConnectorStatus,
  IOcaMediaConnectorStatus,
} from './OcaMediaConnectorStatus';

export declare interface IOcaMediaConnectorStatusChangedEventData {
  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: IOcaEvent;

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
  constructor(Event: OcaEvent, ConnectorStatus: OcaMediaConnectorStatus);

  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: OcaEvent;

  /**
   * The status that has changed.
   * @type OcaMediaConnectorStatus
   */
  ConnectorStatus: OcaMediaConnectorStatus;
}
