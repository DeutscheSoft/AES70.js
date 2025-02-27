/*
 * This file has been generated.
 */

export class OcaObjectListEventData {
  /**
   * Notification data supplied by events returning object lists, for example
   * the **SynchronizeState** event defined in **OcaSubscriptionManager.**
   * @class OcaObjectListEventData
   */
  constructor(objectList) {
    /**
     * List of object numbers.
     * @type number[]
     */
    this.objectList = objectList;
  }
}
