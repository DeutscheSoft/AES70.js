/*
 * This file has been generated.
 */

export declare interface IOcaClassIdentification {
  /**
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class.
   * @type number
   */
  ClassVersion: number;
}

export declare class OcaClassIdentification implements IOcaClassIdentification {
  /**
   * @class OcaClassIdentification
   */
  constructor(ClassID: string, ClassVersion: number);

  /**
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class.
   * @type number
   */
  ClassVersion: number;
}
