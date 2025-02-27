/*
 * This file has been generated.
 */

export class OcaPortIdentification {
  /**
   * Representation of an OCA (input or output) port that is used in the signal
   * path representation of an OCA device.
   * @class OcaPortIdentification
   */
  constructor(Owner, ID) {
    /**
     * ONo of object that owns the port.
     * @type number
     */
    this.Owner = Owner;
    /**
     * ID of the port. ID={mode,index}; mode is input or output.
     * @type OcaPortID
     */
    this.ID = ID;
  }
}
