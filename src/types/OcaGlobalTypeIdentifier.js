/*
 * This file has been generated.
 */

export class OcaGlobalTypeIdentifier {
  /**
   * Globally unique identifier of something that belongs to an organization.
   * @class OcaGlobalTypeIdentifier
   */
  constructor(Authority, ID) {
    /**
     * Unique identifier of organization that has authority over this reusable
     * block type. A zero value indicates a global type defined by the AES70
     * standard itself.
     * @type Uint8Array
     */
    this.Authority = Authority;
    /**
     * ID of library volume type defined by given Authority. Value is unique
     * within the given Authority.
     * @type number
     */
    this.ID = ID;
  }
}
