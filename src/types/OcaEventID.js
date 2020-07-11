/*
 * This file has been generated.
 */

/**
 * Representation of an OCA event ID. A class may define at most 255
 * events of its own. Additional events may be inherited, so the total
 * number may exceed 255.
 */
export class OcaEventID {
  constructor(DefLevel, EventIndex) {
    /**
     * Level in tree of class which defines this event (1=root)
     * @member RemoteControlClasses.OcaEventID#OnDefLevelChanged {PropertyEvent<int>} - This event is emitted when DefLevel changes in the remote object.
     */
    this.DefLevel = DefLevel;
    /**
     * Index of the event (in the class description).
     * @member RemoteControlClasses.OcaEventID#OnEventIndexChanged {PropertyEvent<int>} - This event is emitted when EventIndex changes in the remote object.
     */
    this.EventIndex = EventIndex;
  }
}
