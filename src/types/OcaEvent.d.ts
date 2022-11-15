/*
 * This file has been generated.
 */
import { IOcaEventID, OcaEventID } from './OcaEventID';

export declare interface IOcaEvent {
  /**
   * Object number of the emitter.
   * @type number
   */
  EmitterONo: number;

  /**
   * Event ID of the subscribed event.
   * @type OcaEventID
   */
  EventID: IOcaEventID;
}

export declare class OcaEvent implements IOcaEvent {
  /**
   * Representation of an OCA event, i.e. the unique combination of emitter ONo and the EventID.
   * @class OcaEvent
   */
  constructor(EmitterONo: number, EventID: OcaEventID);

  /**
   * Object number of the emitter.
   * @type number
   */
  EmitterONo: number;

  /**
   * Event ID of the subscribed event.
   * @type OcaEventID
   */
  EventID: OcaEventID;
}
