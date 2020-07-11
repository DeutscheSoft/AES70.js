/*
 * This file has been generated.
 */

/**
 * This was not documented in the OCA standard.
 */
export class OcaMediaSourceConnectorChangedEventData {
  constructor(Event, SourceConnector, ChangeType, ChangedElement) {
    /**
     * The event that was raised.
     * @member RemoteControlClasses.OcaMediaSourceConnectorChangedEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * The media source connector for which the changed event holds (i.e.
     * that is added, deleted or changed).
     * @member RemoteControlClasses.OcaMediaSourceConnectorChangedEventData#OnSourceConnectorChanged {PropertyEvent<OcaMediaSourceConnector>} - This event is emitted when SourceConnector changes in the remote object.
     */
    this.SourceConnector = SourceConnector;
    /**
     * Indicates what type of change occurred. Only ItemAdded, ItemChanged
     * and ItemDeleted can be used in this event data.
     * @member RemoteControlClasses.OcaMediaSourceConnectorChangedEventData#OnChangeTypeChanged {PropertyEvent<OcaPropertyChangeType>} - This event is emitted when ChangeType changes in the remote object.
     */
    this.ChangeType = ChangeType;
    /**
     * Indicates which element(s) of the connector changed. If the connector
     * is added or deleted, all bits in this bitset shall be set.
     * @member RemoteControlClasses.OcaMediaSourceConnectorChangedEventData#OnChangedElementChanged {PropertyEvent<OcaMediaConnectorElement>} - This event is emitted when ChangedElement changes in the remote object.
     */
    this.ChangedElement = ChangedElement;
  }
}
