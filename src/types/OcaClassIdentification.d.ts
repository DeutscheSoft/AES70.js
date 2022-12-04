/*
 * This file has been generated.
 */

export declare interface IOcaClassIdentification {
  /**
   * This was not documented in the OCA standard.
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
   * This was not documented in the OCA standard.
   * @class OcaClassIdentification
   */
  constructor(ClassID: string, ClassVersion: number);

  /**
   * This was not documented in the OCA standard.
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class.
   * @type number
   */
  ClassVersion: number;
}
