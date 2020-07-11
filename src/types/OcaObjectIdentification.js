/*
 * This file has been generated.
 */

/**
 * Object identification. Composite of object number and object's class.
 * Used mainly in discovery processes.
 */
export class OcaObjectIdentification {
  constructor(ONo, ClassIdentification) {
    /**
     * Object number of referenced object.
     * @member RemoteControlClasses.OcaObjectIdentification#OnONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ONo changes in the remote object.
     */
    this.ONo = ONo;
    /**
     * Class identification of referenced object.
     * @member RemoteControlClasses.OcaObjectIdentification#OnClassIdentificationChanged {PropertyEvent<OcaClassIdentification>} - This event is emitted when ClassIdentification changes in the remote object.
     */
    this.ClassIdentification = ClassIdentification;
  }
}
