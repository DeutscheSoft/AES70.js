/*
 * This file has been generated.
 */

export declare interface IOcaManagerDescriptor {
  /**
   * Object number of this Manager instance.
   * @type number
   */
  ObjectNumber: number;

  /**
   * Name of this Manager instance.
   * @type string
   */
  Name: string;

  /**
   * ClassID of the class from which the Manager instance was constructed.
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class from which this Manager instance was
   * constructed.
   * @type number
   */
  ClassVersion: number;
}

export declare class OcaManagerDescriptor implements IOcaManagerDescriptor {
  /**
   * Structure that describes a Manager instance.
   * @class OcaManagerDescriptor
   */
  constructor(
    ObjectNumber: number,
    Name: string,
    ClassID: string,
    ClassVersion: number
  );

  /**
   * Object number of this Manager instance.
   * @type number
   */
  ObjectNumber: number;

  /**
   * Name of this Manager instance.
   * @type string
   */
  Name: string;

  /**
   * ClassID of the class from which the Manager instance was constructed.
   * @type string
   */
  ClassID: string;

  /**
   * Version number of the class from which this Manager instance was
   * constructed.
   * @type number
   */
  ClassVersion: number;
}
