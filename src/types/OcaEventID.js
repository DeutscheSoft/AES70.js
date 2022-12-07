/*
 * This file has been generated.
 */

export class OcaEventID {
  /**
   * Representation of an OCA event ID. A class may define at most 255 events of
   * its own. Additional events may be inherited, so the total number may exceed
   * 255.
   * @class OcaEventID
   */
  constructor(DefLevel, EventIndex) {
    /**
     * Level in tree of class which defines this event (1=root)
     * @type number
     */
    this.DefLevel = DefLevel;
    /**
     * Index of the event (in the class description).
     * @type number
     */
    this.EventIndex = EventIndex;
  }
}
