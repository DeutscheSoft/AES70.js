/*
 * This file has been generated.
 */

export class OcaModelGUID {
  /**
   * 64 bit device type GUID.
   * @class OcaModelGUID
   */
  constructor(Reserved, MfrCode, ModelCode) {
    /**
     * 8 reserved bits.
     * @type string
     */
    this.Reserved = Reserved;
    /**
     * IEEE Manufacturer code. Unique worldwide.
     * @type string
     */
    this.MfrCode = MfrCode;
    /**
     * Model code. Unique within the given manufacturer's products. May be set freely by the manufacturer.
     * @type string
     */
    this.ModelCode = ModelCode;
  }
}
