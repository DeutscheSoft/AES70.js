/*
 * This file has been generated.
 */

export declare interface IOcaEventID {
  /**
   * Level in tree of class which defines this event (1=root)
   * @type number
   */
  DefLevel: number;

  /**
   * Index of the event (in the class description).
   * @type number
   */
  EventIndex: number;
}

export declare class OcaEventID implements IOcaEventID {
  /**
   * Representation of an OCA event ID. A class may define at most 255 events of its own. Additional events may be inherited, so the total number may exceed 255.
   * @class OcaEventID
   */
  constructor(DefLevel: number, EventIndex: number);

  /**
   * Level in tree of class which defines this event (1=root)
   * @type number
   */
  DefLevel: number;

  /**
   * Index of the event (in the class description).
   * @type number
   */
  EventIndex: number;
}
