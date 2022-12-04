/*
 * This file has been generated.
 */

export class OcaManagerDescriptor {
  /**
   * Structure that describes a manager instance.
   * @class OcaManagerDescriptor
   */
  constructor(ObjectNumber, Name, ClassID, ClassVersion) {
    /**
     * Object number of this manager instance.
     * @type number
     */
    this.ObjectNumber = ObjectNumber;
    /**
     * Name of the manager instance.
     * @type string
     */
    this.Name = Name;
    /**
     * ClassID of the class from which the manager instance was created.
     * @type string
     */
    this.ClassID = ClassID;
    /**
     * Version number of the class from which this instance was created.
     * @type number
     */
    this.ClassVersion = ClassVersion;
  }
}
