/*
 * This file has been generated.
 */

import { OcaEvent, IOcaEvent } from './OcaEvent';

export declare interface IOcaObjectListEventData {
  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: IOcaEvent;

  /**
   * List of object numbers.
   * @type number[]
   */
  objectList: number[];
}

export declare class OcaObjectListEventData implements IOcaObjectListEventData {
  /**
   * Event data for events returning object lists, for example the  **SynchronizeState**  event defined in  **OcaSubscriptionManager.**
   * @class OcaObjectListEventData
   */
  constructor(Event: OcaEvent, objectList: number[]);

  /**
   * The event that was raised.
   * @type OcaEvent
   */
  Event: OcaEvent;

  /**
   * List of object numbers.
   * @type number[]
   */
  objectList: number[];
}
