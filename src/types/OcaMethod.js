/*
 * This file has been generated.
 */

export class OcaMethod {
  /**
   * Representation of an OCA method, i.e. the unique combination of an ONo and a MethodID. To denote the absence of a method, all field values shall be zero. Such a value is called the  *Null Method Identifier* .
   * @class OcaMethod
   */
  constructor(ONo, MethodID) {
    /**
     * The object number. For Null Method Identifier, value shall be zero.
     * @type number
     */
    this.ONo = ONo;
    /**
     * The method ID. For Null Method Identifier, value of all subfields shall be zero.
     * @type OcaMethodID
     */
    this.MethodID = MethodID;
  }
}
