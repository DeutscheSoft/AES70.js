/*
 * This file has been generated.
 */

export class OcaGlobalTypeIdentifier {
  /**
   * Globally unique identifier of something that belongs to an organization. An
   * identifier with both Authority and ID fields of zero shall be interpreted
   * as a null value.
   * @class OcaGlobalTypeIdentifier
   */
  constructor(Organization, ID) {
    /**
     * Unique identifier of organization that has authority over this reusable
     * block type.
     * @type Uint8Array
     */
    this.Organization = Organization;
    /**
     * ID of item defined by given Authority. Value is unique within the given
     * Authority.
     * @type number
     */
    this.ID = ID;
  }
}
