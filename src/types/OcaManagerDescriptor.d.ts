/*
 * This file has been generated.
 */

export declare interface IOcaManagerDescriptor {
  /**
   * Object number of this manager instance.
   * @type number
   */
  ObjectNumber: number;

  /**
   * Name of the manager instance.
   * @type string
   */
  Name: string;

  /**
   * ClassID of the class from which the manager instance was created.
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class from which this instance was created.
   * @type number
   */
  ClassVersion: number;
}

export declare class OcaManagerDescriptor implements IOcaManagerDescriptor {
  /**
   * Structure that describes a manager instance.
   * @class OcaManagerDescriptor
   */
  constructor(
    ObjectNumber: number,
    Name: string,
    ClassID: string,
    ClassVersion: number
  );

  /**
   * Object number of this manager instance.
   * @type number
   */
  ObjectNumber: number;

  /**
   * Name of the manager instance.
   * @type string
   */
  Name: string;

  /**
   * ClassID of the class from which the manager instance was created.
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class from which this instance was created.
   * @type number
   */
  ClassVersion: number;
}
