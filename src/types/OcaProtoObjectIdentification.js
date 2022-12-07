/*
 * This file has been generated.
 */

export class OcaProtoObjectIdentification {
  /**
   * Prototype object identification. Composite of prototype object number and
   * prototype object's class identification. Used in **OcaBlockFactory**.
   * @class OcaProtoObjectIdentification
   */
  constructor(POno, ClassIdentification) {
    /**
     * Prototype object number of referenced prototype object.
     * @type number
     */
    this.POno = POno;
    /**
     * Class identification of referenced object.
     * @type OcaClassIdentification
     */
    this.ClassIdentification = ClassIdentification;
  }
}
