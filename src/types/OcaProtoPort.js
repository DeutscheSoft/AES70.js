/*
 * This file has been generated.
 */

export class OcaProtoPort {
  /**
   * @class OcaProtoPort
   */
  constructor(Owner, ProtoID, Name) {
    /**
     * Prototype object number of the prototype member that owns the prototype
     * port. The value of 0 (zero) is special, and refers to the block itself,
     * rather than to any of its members.
     * @type number
     */
    this.Owner = Owner;
    /**
     * ID of the prototype port.
     * @type OcaPortID
     */
    this.ProtoID = ProtoID;
    /**
     * Name of the prototype port.
     * @type string
     */
    this.Name = Name;
  }
}
