/*
 * This file has been generated.
 */

export declare interface IOcaModelGUID {
  /**
   * 8 reserved bits.
   * @type Uint8Array
   */
  Reserved: Uint8Array;

  /**
   * IEEE Manufacturer code. Unique worldwide.
   * @type Uint8Array
   */
  MfrCode: Uint8Array;

  /**
   * Model code. Unique within the given manufacturer's products. May be set freely by the manufacturer.
   * @type Uint8Array
   */
  ModelCode: Uint8Array;
}

export declare class OcaModelGUID implements IOcaModelGUID {
  /**
   * 64 bit device type GUID.
   * @class OcaModelGUID
   */
  constructor(Reserved: Uint8Array, MfrCode: Uint8Array, ModelCode: Uint8Array);

  /**
   * 8 reserved bits.
   * @type Uint8Array
   */
  Reserved: Uint8Array;

  /**
   * IEEE Manufacturer code. Unique worldwide.
   * @type Uint8Array
   */
  MfrCode: Uint8Array;

  /**
   * Model code. Unique within the given manufacturer's products. May be set freely by the manufacturer.
   * @type Uint8Array
   */
  ModelCode: Uint8Array;
}
