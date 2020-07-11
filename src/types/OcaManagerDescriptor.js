/*
 * This file has been generated.
 */

/**
 * Structure that describes a manager instance.
 */
export class OcaManagerDescriptor {
  constructor(ObjectNumber, Name, ClassID, ClassVersion) {
    /**
     * Object number of this manager instance.
     * @member RemoteControlClasses.OcaManagerDescriptor#OnObjectNumberChanged {PropertyEvent<OcaONo>} - This event is emitted when ObjectNumber changes in the remote object.
     */
    this.ObjectNumber = ObjectNumber;
    /**
     * Name of the manager instance.
     * @member RemoteControlClasses.OcaManagerDescriptor#OnNameChanged {PropertyEvent<string>} - This event is emitted when Name changes in the remote object.
     */
    this.Name = Name;
    /**
     * ClassID of the class from which the manager instance was created.
     */
    this.ClassID = ClassID;
    /**
     * Version number of the class from which this instance was created.
     */
    this.ClassVersion = ClassVersion;
  }
}
