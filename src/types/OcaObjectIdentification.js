/*
 * This file has been generated.
 */

export class OcaObjectIdentification {
  /**
   * Object identification. Composite of object number and object's class. Used
   * mainly in discovery processes.
   * @class OcaObjectIdentification
   */
  constructor(ONo, ClassIdentification) {
    /**
     * Object number of referenced object.
     * @type number
     */
    this.ONo = ONo;
    /**
     * Class identification of referenced object.
     * @type OcaClassIdentification
     */
    this.ClassIdentification = ClassIdentification;
  }
}
