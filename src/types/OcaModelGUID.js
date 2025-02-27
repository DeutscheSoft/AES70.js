/*
 * This file has been generated.
 */

export class OcaModelGUID {
  /**
   * @class OcaModelGUID
   */
  constructor(Reserved, MfrCode, ModelCode) {
    /**
     * 8 reserved bits.
     * @type Uint8Array
     */
    this.Reserved = Reserved;
    /**
     * IEEE Manufacturer code. Unique worldwide.
     * @type Uint8Array
     */
    this.MfrCode = MfrCode;
    /**
     * Model code. Unique within the given manufacturer's products. May be set
     * freely by the manufacturer.
     * @type Uint8Array
     */
    this.ModelCode = ModelCode;
  }
}
