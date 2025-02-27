/*
 * This file has been generated.
 */

export declare interface IOcaObjectListEventData {
  /**
   * List of object numbers.
   * @type number[]
   */
  objectList: number[];
}

export declare class OcaObjectListEventData implements IOcaObjectListEventData {
  /**
   * Notification data supplied by events returning object lists, for example
   * the **SynchronizeState** event defined in **OcaSubscriptionManager.**
   * @class OcaObjectListEventData
   */
  constructor(objectList: number[]);

  /**
   * List of object numbers.
   * @type number[]
   */
  objectList: number[];
}
