/*
 * This file has been generated.
 */

export class OcaObjectSearchResult {
  /**
   * Result of object search via the Find...() methods of  **OcaBlock** . Dynamic format, form used depends on type of search and options. The FieldMap parameter of the Find...() methods specifies which optional fields should be returned as nonnull.
   * @class OcaObjectSearchResult
   */
  constructor(ONo, ClassIdentification, ContainerPath, Role, Label) {
    /**
     * ONo of object found
     * @type number
     */
    this.ONo = ONo;
    /**
     * Class identification (class ID + class version) of object found
     * @type OcaClassIdentification
     */
    this.ClassIdentification = ClassIdentification;
    /**
     * Chain of ONos leading from root to this object's container
     * @type number[]
     */
    this.ContainerPath = ContainerPath;
    /**
     * Object role in device
     * @type string
     */
    this.Role = Role;
    /**
     * Object user-specified label
     * @type string
     */
    this.Label = Label;
  }
}
