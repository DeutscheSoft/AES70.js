/*
 * This file has been generated.
 */

export class OcaObjectListEventData {
  /**
   * Event data for events returning object lists, for example the  **SynchronizeState**  event defined in  **OcaSubscriptionManager.**
   * @class OcaObjectListEventData
   */
  constructor(Event, objectList) {
    /**
     * The event that was raised.
     * @type OcaEvent
     */
    this.Event = Event;
    /**
     * List of object numbers.
     * @type Array
     */
    this.objectList = objectList;
  }
}
