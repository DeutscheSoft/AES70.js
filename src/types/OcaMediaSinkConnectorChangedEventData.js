/*
 * This file has been generated.
 */

export class OcaMediaSinkConnectorChangedEventData {
  /**
   * This was not documented in the OCA standard.
   * @class OcaMediaSinkConnectorChangedEventData
   */
  constructor(SinkConnector, ChangeType, ChangedElement) {
    /**
     * The media source connector for which the changed event holds (i.e. that is added, deleted or changed).
     * @type OcaMediaSinkConnector
     */
    this.SinkConnector = SinkConnector;
    /**
     * Indicates what type of change occurred. Only ItemAdded, ItemChanged and ItemDeleted can be used in this event data.
     * @type OcaPropertyChangeType
     */
    this.ChangeType = ChangeType;
    /**
     * @type number
     * @type OcaMediaConnectorElement
     */
    this.ChangedElement = ChangedElement;
  }
}
