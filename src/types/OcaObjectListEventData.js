/*
 * This file has been generated.
 */

/**
 * Event data for events returning object lists, for example the
 * <b>SynchronizeState</b> event defined in
 * <b>OcaSubscriptionManager.</b>
 */
export class OcaObjectListEventData {
  constructor(Event, objectList) {
    /**
     * The event that was raised.
     * @member RemoteControlClasses.OcaObjectListEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * List of object numbers.
     * @member RemoteControlClasses.OcaObjectListEventData#OnobjectListChanged {PropertyEvent<array>} - This event is emitted when objectList changes in the remote object.
     */
    this.objectList = objectList;
  }
}
