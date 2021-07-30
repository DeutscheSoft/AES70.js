/*
 * This file has been generated.
 */

export declare interface IOcaClassIdentification {
  /**
   * This was not documented in the OCA standard.
   */
  ClassID: string;

  /**
   * Version number of the class.
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
   */
  ClassID: string;

  /**
   * Version number of the class.
   */
  ClassVersion: number;
}
