/*
 * This file has been generated.
 */

export declare interface IOcaMethodID {
  /**
   * Level in tree of class which defines this method (1=root)
   * @type number
   */
  DefLevel: number;

  /**
   * Index of the method (in the class description).
   * @type number
   */
  MethodIndex: number;
}

export declare class OcaMethodID implements IOcaMethodID {
  /**
   * Representation of an OCA method ID. A class may define at most 255 methods of its own. Additional methods may be inherited, so the total number may exceed 255.
   * @class OcaMethodID
   */
  constructor(DefLevel: number, MethodIndex: number);

  /**
   * Level in tree of class which defines this method (1=root)
   * @type number
   */
  DefLevel: number;

  /**
   * Index of the method (in the class description).
   * @type number
   */
  MethodIndex: number;
}
