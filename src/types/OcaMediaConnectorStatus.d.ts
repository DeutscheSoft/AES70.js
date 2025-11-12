/*
 * This file has been generated.
 */
import {
  IOcaMediaConnectorState,
  OcaMediaConnectorState,
} from './OcaMediaConnectorState.js';

export declare interface IOcaMediaConnectorStatus {
  /**
   * ID of the connector for which this status is valid
   * @type number
   */
  ConnectorID: number;

  /**
   * Connector state
   * @type OcaMediaConnectorState
   */
  State: IOcaMediaConnectorState;

  /**
   * Indicates what type of error the connector is in (only relevant if the
   * State is Fault).
   * @type number
   */
  ErrorCode: number;
}

export declare class OcaMediaConnectorStatus
  implements IOcaMediaConnectorStatus {
  /**
   * Represents the current status of a media (source or sink) connector.
   * @class OcaMediaConnectorStatus
   */
  constructor(
    ConnectorID: number,
    State: OcaMediaConnectorState,
    ErrorCode: number
  );

  /**
   * ID of the connector for which this status is valid
   * @type number
   */
  ConnectorID: number;

  /**
   * Connector state
   * @type OcaMediaConnectorState
   */
  State: OcaMediaConnectorState;

  /**
   * Indicates what type of error the connector is in (only relevant if the
   * State is Fault).
   * @type number
   */
  ErrorCode: number;
}
