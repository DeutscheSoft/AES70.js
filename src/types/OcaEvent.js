/*
 * This file has been generated.
 */

export class OcaEvent {
  /**
   * Representation of an OCA event, i.e. the unique combination of emitter ONo
   * and the EventID.
   * @class OcaEvent
   */
  constructor(EmitterONo, EventID) {
    /**
     * Object number of the emitter.
     * @type number
     */
    this.EmitterONo = EmitterONo;
    /**
     * Event ID of the subscribed event.
     * @type OcaEventID
     */
    this.EventID = EventID;
  }
}
