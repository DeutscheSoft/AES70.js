/*
 * This file has been generated.
 */

/**
 * Prototype object identification. Composite of prototype object number
 * and prototype object's class identification. Used in
 * <b>OcaBlockFactory</b>.
 */
export class OcaProtoObjectIdentification {
  constructor(POno, ClassIdentification) {
    /**
     * Prototype object number of referenced prototype object.
     * @member RemoteControlClasses.OcaProtoObjectIdentification#OnPOnoChanged {PropertyEvent<OcaProtoONo>} - This event is emitted when POno changes in the remote object.
     */
    this.POno = POno;
    /**
     * Class identification of referenced object.
     * @member RemoteControlClasses.OcaProtoObjectIdentification#OnClassIdentificationChanged {PropertyEvent<OcaClassIdentification>} - This event is emitted when ClassIdentification changes in the remote object.
     */
    this.ClassIdentification = ClassIdentification;
  }
}
