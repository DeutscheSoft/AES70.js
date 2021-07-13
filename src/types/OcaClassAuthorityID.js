/*
 * This file has been generated.
 */

export class OcaClassAuthorityID {
  /**
   * Class authority identifier. Identifies the authority for a class's definition.
   * @class OcaClassAuthorityID
   */
  constructor(Sentinel, Reserved, OrganizationID) {
    /**
     * Sentinel signifying an Authority ID
     */
    this.Sentinel = Sentinel;
    /**
     * Reserved, must be zero.
     */
    this.Reserved = Reserved;
    /**
     * Authority's IEEE public Company ID (public CID) or IEEE Organizational Unique Identifier (OUI), or the value zero, which signifies the Authority of this AES70 standard.
     */
    this.OrganizationID = OrganizationID;
  }
}
