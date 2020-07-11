/*
 * This file has been generated.
 */

/**
 * Representation of an OCA event, i.e. the unique combination of emitter
 * ONo and the EventID.
 */
export class OcaEvent {
  constructor(EmitterONo, EventID) {
    /**
     * Object number of the emitter.
     * @member RemoteControlClasses.OcaEvent#OnEmitterONoChanged {PropertyEvent<OcaONo>} - This event is emitted when EmitterONo changes in the remote object.
     */
    this.EmitterONo = EmitterONo;
    /**
     * Event ID of the subscribed event.
     * @member RemoteControlClasses.OcaEvent#OnEventIDChanged {PropertyEvent<OcaEventID>} - This event is emitted when EventID changes in the remote object.
     */
    this.EventID = EventID;
  }
}
