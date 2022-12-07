/*
 * This file has been generated.
 */

export class OcaMethodID {
  /**
   * Representation of an OCA method ID. A class may define at most 255 methods
   * of its own. Additional methods may be inherited, so the total number may
   * exceed 255.
   * @class OcaMethodID
   */
  constructor(DefLevel, MethodIndex) {
    /**
     * Level in tree of class which defines this method (1=root)
     * @type number
     */
    this.DefLevel = DefLevel;
    /**
     * Index of the method (in the class description).
     * @type number
     */
    this.MethodIndex = MethodIndex;
  }
}
