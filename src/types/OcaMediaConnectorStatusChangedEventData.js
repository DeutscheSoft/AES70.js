/*
 * This file has been generated.
 */

export class OcaMediaConnectorStatusChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaMediaConnectorStatusChangedEventData
   */
  constructor(Event, ConnectorStatus) {
    /**
     * The event that was raised.
     * @type OcaEvent
     */
    this.Event = Event;
    /**
     * The status that has changed.
     * @type OcaMediaConnectorStatus
     */
    this.ConnectorStatus = ConnectorStatus;
  }
}
