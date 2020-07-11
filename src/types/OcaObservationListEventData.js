/*
 * This file has been generated.
 */

/**
 * Event data for event <b>OcaNumericObserverList.Observation</b>. Note:
 * due to an error in AES70-2015, this class was not made a subclass of
 * <b>OcaEventData</b>. Therefore, this class explicitly defines the
 * <b>Event</b> property explicitly, rather than inheriting it from
 * <b>OcaEventData, </b>as other event data classes do. However, the
 * effect is the same as for all event data classes: the first property
 * in the data structure is an <b>OcaEvent </b>value.
 */
export class OcaObservationListEventData {
  constructor(Event, Reading) {
    /**
     * The event that was raised. This field is not normally part of event
     * data datatypes and was erroneously included this one; it is now
     * retained for forward compatibility.
     * @member RemoteControlClasses.OcaObservationListEventData#OnEventChanged {PropertyEvent<OcaEvent>} - This event is emitted when Event changes in the remote object.
     */
    this.Event = Event;
    /**
     * The list of observed values that the event is reporting.
     * @member RemoteControlClasses.OcaObservationListEventData#OnReadingChanged {PropertyEvent<array>} - This event is emitted when Reading changes in the remote object.
     */
    this.Reading = Reading;
  }
}
