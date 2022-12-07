/*
 * This file has been generated.
 */

export class OcaProperty {
  /**
   * Template for complete identification of an OCA property instance, including
   * object number, property ID, Get and Set method IDs, and datatype.
   * @class OcaProperty
   */
  constructor(ONo, Descriptor) {
    /**
     * Object number
     * @type number
     */
    this.ONo = ONo;
    /**
     * Property descriptor.
     * @type OcaPropertyDescriptor
     */
    this.Descriptor = Descriptor;
  }
}
