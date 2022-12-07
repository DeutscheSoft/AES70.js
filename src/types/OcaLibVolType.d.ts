/*
 * This file has been generated.
 */

export declare interface IOcaLibVolType {
  /**
   * Unique identifier of organization that has authority over this library
   * volume type. A zero value indicates a standard library volume type defined
   * by the AES70 standard.
   * @type Uint8Array
   */
  Authority: Uint8Array;

  /**
   * ID of library volume type defined by given Authority. Value is unique
   * within the given Authority. If Authority=0, the values of this property are
   * given by enum **OcaLibVolStandardID.**
   * @type number
   */
  ID: number;
}

export declare class OcaLibVolType implements IOcaLibVolType {
  /**
   * Globally unique identifier of a library type.
   * @class OcaLibVolType
   */
  constructor(Authority: Uint8Array, ID: number);

  /**
   * Unique identifier of organization that has authority over this library
   * volume type. A zero value indicates a standard library volume type defined
   * by the AES70 standard.
   * @type Uint8Array
   */
  Authority: Uint8Array;

  /**
   * ID of library volume type defined by given Authority. Value is unique
   * within the given Authority. If Authority=0, the values of this property are
   * given by enum **OcaLibVolStandardID.**
   * @type number
   */
  ID: number;
}
