/*
 * This file has been generated.
 */

/**
 * Representation of an OCA method ID. A class may define at most 255
 * methods of its own. Additional methods may be inherited, so the total
 * number may exceed 255.
 */
export class OcaMethodID {
  constructor(DefLevel, MethodIndex) {
    /**
     * Level in tree of class which defines this method (1=root)
     * @member RemoteControlClasses.OcaMethodID#OnDefLevelChanged {PropertyEvent<int>} - This event is emitted when DefLevel changes in the remote object.
     */
    this.DefLevel = DefLevel;
    /**
     * Index of the method (in the class description).
     * @member RemoteControlClasses.OcaMethodID#OnMethodIndexChanged {PropertyEvent<int>} - This event is emitted when MethodIndex changes in the remote object.
     */
    this.MethodIndex = MethodIndex;
  }
}
