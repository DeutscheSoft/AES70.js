/*
 * This file has been generated.
 */

export class OcaLibVolType {
  /**
   * Globally unique identifier of a library type.
   * @class OcaLibVolType
   */
  constructor(Authority, ID) {
    /**
     * Unique identifier of organization that has authority over this library volume type. A zero value indicates a standard library volume type defined by the AES70 standard.
     * @type Uint8Array
     */
    this.Authority = Authority;
    /**
     * ID of library volume type defined by given Authority. Value is unique within the given Authority. If Authority=0, the values of this property are given by enum  **OcaLibVolStandardID.**
     * @type number
     */
    this.ID = ID;
  }
}
