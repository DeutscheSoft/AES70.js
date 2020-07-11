/*
 * This file has been generated.
 */

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaConnectorStatusChangedEventData {
  constructor(Event, ConnectorStatus) {
    /**
     * The event that was raised.
     * @member RemoteControlClasses.OcaMediaConnectorStatusChangedEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * The status that has changed.
     * @member RemoteControlClasses.OcaMediaConnectorStatusChangedEventData#OnConnectorStatusChanged {PropertyEvent<OcaMediaConnectorStatus>} - This event is emitted when ConnectorStatus changes in the remote object.
     */
    this.ConnectorStatus = ConnectorStatus;
  }
}
