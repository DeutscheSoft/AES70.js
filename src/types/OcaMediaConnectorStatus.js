/*
 * This file has been generated.
 */

/**
 * Represents the current status of a media (source or sink) connector.
 */
export class OcaMediaConnectorStatus {
  constructor(ConnectorID, State, ErrorCode) {
    /**
     * ID of the connector for which this status is valid
     * @member RemoteControlClasses.OcaMediaConnectorStatus#OnConnectorIDChanged {PropertyEvent<OcaMediaConnectorID>} - This event is emitted when ConnectorID changes in the remote object.
     */
    this.ConnectorID = ConnectorID;
    /**
     * Connector state
     * @member RemoteControlClasses.OcaMediaConnectorStatus#OnStateChanged {PropertyEvent<OcaMediaConnectorState>} - This event is emitted when State changes in the remote object.
     */
    this.State = State;
    /**
     * Indicates what type of error the connector is in (only relevant if the
     * State is Fault).
     * @member RemoteControlClasses.OcaMediaConnectorStatus#OnErrorCodeChanged {PropertyEvent<int>} - This event is emitted when ErrorCode changes in the remote object.
     */
    this.ErrorCode = ErrorCode;
  }
}
