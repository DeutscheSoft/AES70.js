/*
 * This file has been generated.
 */

export class OcaMediaConnectorStatus {
  /**
   * Represents the current status of a media (source or sink) connector.
   * @class OcaMediaConnectorStatus
   */
  constructor(ConnectorID, State, ErrorCode) {
    /**
     * ID of the connector for which this status is valid
     * @type number
     */
    this.ConnectorID = ConnectorID;
    /**
     * Connector state
     * @type OcaMediaConnectorState
     */
    this.State = State;
    /**
     * Indicates what type of error the connector is in (only relevant if the
     * State is Fault).
     * @type number
     */
    this.ErrorCode = ErrorCode;
  }
}
