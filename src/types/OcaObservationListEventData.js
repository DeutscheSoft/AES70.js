/*
 * This file has been generated.
 */

export class OcaObservationListEventData {
  /**
   * Event data for event  **OcaNumericObserverList.Observation** . Note: due to an error in AES70-2015, this class was not made a subclass of  **OcaEventData** . Therefore, this class explicitly defines the  **Event**  property explicitly, rather than inheriting it from  **OcaEventData,** as other event data classes do. However, the effect is the same as for all event data classes: the first property in the data structure is an  **OcaEvent** value.
   * @class OcaObservationListEventData
   */
  constructor(Reading) {
    /**
     * The list of observed values that the event is reporting.
     * @type Array
     */
    this.Reading = Reading;
  }
}
