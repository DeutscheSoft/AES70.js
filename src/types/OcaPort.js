/*
 * This file has been generated.
 */

export class OcaPort {
  /**
   * Representation of an OCA (input or output) port that is used in the signal
   * path representation of an OCA device.
   * @class OcaPort
   */
  constructor(Owner, ID, Name) {
    /**
     * Object number of the object that owns the port.
     * @type number
     */
    this.Owner = Owner;
    /**
     * ID of the port.
     * @type OcaPortID
     */
    this.ID = ID;
    /**
     * Port ID of the port.
     * @type string
     */
    this.Name = Name;
  }
}
