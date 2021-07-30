/*
 * This file has been generated.
 */

import { OcaEvent, IOcaEvent } from './OcaEvent';

export declare interface IOcaObservationEventData {
  /**
   * The event that was raised. This field is not normally part of event data datatypes and was erroneously included this one; it is now retained for forward compatibility.
   * @type OcaEvent
   */
  Event: IOcaEvent;

  /**
   * The observed value that the event is reporting.
   * @type number
   */
  Reading: number;
}

export declare class OcaObservationEventData
  implements IOcaObservationEventData {
  /**
   * Event data for event  **OcaNumericObserver.Observation** . Note: due to an error in AES70-2015, this class was not made a subclass of  **OcaEventData** . Therefore, this class explicitly defines the  **Event**  property explicitly, rather than inheriting it from  **OcaEventData,** as other event data classes do. However, the effect is the same as for all event data classes: the first property in the data structure is an  **OcaEvent** value.
   * @class OcaObservationEventData
   */
  constructor(Event: OcaEvent, Reading: number);

  /**
   * The event that was raised. This field is not normally part of event data datatypes and was erroneously included this one; it is now retained for forward compatibility.
   * @type OcaEvent
   */
  Event: OcaEvent;

  /**
   * The observed value that the event is reporting.
   * @type number
   */
  Reading: number;
}
