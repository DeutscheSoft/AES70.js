/*
 * This file has been generated.
 */

export class OcaManagerDescriptor {
  /**
   * Structure that describes a Manager instance.
   * @class OcaManagerDescriptor
   */
  constructor(ObjectNumber, Name, ClassID, ClassVersion) {
    /**
     * Object number of this Manager instance.
     * @type number
     */
    this.ObjectNumber = ObjectNumber;
    /**
     * Name of this Manager instance.
     * @type string
     */
    this.Name = Name;
    /**
     * ClassID of the class from which the Manager instance was constructed.
     * @type string
     */
    this.ClassID = ClassID;
    /**
     * Version number of the class from which this Manager instance was
     * constructed.
     * @type number
     */
    this.ClassVersion = ClassVersion;
  }
}
