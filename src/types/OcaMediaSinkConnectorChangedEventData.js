/*
 * This file has been generated.
 */

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaSinkConnectorChangedEventData {
  constructor(Event, SinkConnector, ChangeType, ChangedElement) {
    /**
     * The event that was raised.
     * @member RemoteControlClasses.OcaMediaSinkConnectorChangedEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * The media source connector for which the changed event holds (i.e.
     * that is added, deleted or changed).
     * @member RemoteControlClasses.OcaMediaSinkConnectorChangedEventData#OnSinkConnectorChanged {PropertyEvent<OcaMediaSinkConnector>} - This event is emitted when SinkConnector changes in the remote object.
     */
    this.SinkConnector = SinkConnector;
    /**
     * Indicates what type of change occurred. Only ItemAdded, ItemChanged
     * and ItemDeleted can be used in this event data.
     * @member RemoteControlClasses.OcaMediaSinkConnectorChangedEventData#OnChangeTypeChanged {PropertyEvent<OcaPropertyChangeType>} - This event is emitted when ChangeType changes in the remote object.
     */
    this.ChangeType = ChangeType;
    /**
     * Indicates which element(s) of the connector changed. If the connector
     * is added or deleted, all bits in this bitset shall be set.
     * @member RemoteControlClasses.OcaMediaSinkConnectorChangedEventData#OnChangedElementChanged {PropertyEvent<OcaMediaConnectorElement>} - This event is emitted when ChangedElement changes in the remote object.
     */
    this.ChangedElement = ChangedElement;
  }
}
