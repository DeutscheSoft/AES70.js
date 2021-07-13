/*
 * This file has been generated.
 */

export class OcaPropertyID {
  /**
   * Representation of an OCA property ID. A class may define at most 255 properties of its own. Additional properties may be inherited, so the total number may exceed 255.
   * @class OcaPropertyID
   */
  constructor(DefLevel, PropertyIndex) {
    /**
     * Level in tree of class which defines this property (1=root)
     * @type number
     */
    this.DefLevel = DefLevel;
    /**
     * Index of the property (in the class description).
     * @type number
     */
    this.PropertyIndex = PropertyIndex;
  }
}
