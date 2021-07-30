/*
 * This file has been generated.
 */

export declare interface IOcaPropertyID {
  /**
   * Level in tree of class which defines this property (1=root)
   * @type number
   */
  DefLevel: number;

  /**
   * Index of the property (in the class description).
   * @type number
   */
  PropertyIndex: number;
}

export declare class OcaPropertyID implements IOcaPropertyID {
  /**
   * Representation of an OCA property ID. A class may define at most 255 properties of its own. Additional properties may be inherited, so the total number may exceed 255.
   * @class OcaPropertyID
   */
  constructor(DefLevel: number, PropertyIndex: number);

  /**
   * Level in tree of class which defines this property (1=root)
   * @type number
   */
  DefLevel: number;

  /**
   * Index of the property (in the class description).
   * @type number
   */
  PropertyIndex: number;
}
