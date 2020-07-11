/*
 * This file has been generated.
 */

/**
 * Result of object search via the Find...() methods of <b>OcaBlock</b>.
 * Dynamic format, form used depends on type of search and options. The
 * FieldMap parameter of the Find...() methods specifies which optional
 * fields should be returned as nonnull.
 */
export class OcaObjectSearchResult {
  constructor(ONo, ClassIdentification, ContainerPath, Role, Label) {
    /**
     * ONo of object found
     * @member RemoteControlClasses.OcaObjectSearchResult#OnONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ONo changes in the remote object.
     */
    this.ONo = ONo;
    /**
     * Class identification (class ID + class version) of object found
     * @member RemoteControlClasses.OcaObjectSearchResult#OnClassIdentificationChanged {PropertyEvent<OcaClassIdentification>} - This event is emitted when ClassIdentification changes in the remote object.
     */
    this.ClassIdentification = ClassIdentification;
    /**
     * Chain of ONos leading from root to this object's container
     * @member RemoteControlClasses.OcaObjectSearchResult#OnContainerPathChanged {PropertyEvent<OcaONoPath>} - This event is emitted when ContainerPath changes in the remote object.
     */
    this.ContainerPath = ContainerPath;
    /**
     * Object role in device
     * @member RemoteControlClasses.OcaObjectSearchResult#OnRoleChanged {PropertyEvent<string>} - This event is emitted when Role changes in the remote object.
     */
    this.Role = Role;
    /**
     * Object user-specified label
     * @member RemoteControlClasses.OcaObjectSearchResult#OnLabelChanged {PropertyEvent<string>} - This event is emitted when Label changes in the remote object.
     */
    this.Label = Label;
  }
}
