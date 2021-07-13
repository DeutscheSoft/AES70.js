/*
 * This file has been generated.
 */

export class OcaProtoPort {
  /**
   * Representation of an OCA (input or output) proto-port that is used in the proto-signal path representation of an OCA device.
   * @class OcaProtoPort
   */
  constructor(Owner, ProtoID, Name) {
    /**
     * Proto-object number of the proto-member that owns the proto-port.  **The value of 0 (zero) is special, and refers to the block itself, rather than to any of its members.**
     * @type number
     */
    this.Owner = Owner;
    /**
     * ID of the proto-port.
     * @type OcaProtoPortID
     */
    this.ProtoID = ProtoID;
    /**
     * Name of the proto-port.
     * @type string
     */
    this.Name = Name;
  }
}
