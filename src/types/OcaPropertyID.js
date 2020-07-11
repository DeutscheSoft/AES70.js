/*
 * This file has been generated.
 */

/**
 * Representation of an OCA property ID. A class may define at most 255
 * properties of its own. Additional properties may be inherited, so the
 * total number may exceed 255.
 */
export class OcaPropertyID {
  constructor(DefLevel, PropertyIndex) {
    /**
     * Level in tree of class which defines this property (1=root)
     * @member RemoteControlClasses.OcaPropertyID#OnDefLevelChanged {PropertyEvent<int>} - This event is emitted when DefLevel changes in the remote object.
     */
    this.DefLevel = DefLevel;
    /**
     * Index of the property (in the class description).
     * @member RemoteControlClasses.OcaPropertyID#OnPropertyIndexChanged {PropertyEvent<int>} - This event is emitted when PropertyIndex changes in the remote object.
     */
    this.PropertyIndex = PropertyIndex;
  }
}
