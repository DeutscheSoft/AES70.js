/*
 * This file has been generated.
 */

export class OcaManufacturer {
  /**
   * Structure that describes a manufacturer.
   * @class OcaManufacturer
   */
  constructor(
    Name,
    OrganizationID,
    Website,
    BusinessContact,
    TechnicalContact
  ) {
    /**
     * Manufacturer's name
     * @type string
     */
    this.Name = Name;
    /**
     * Manufacturer's IEEE OUI or CID, if any. Zero value means OUI or CID is
     * not specified.
     * @type Uint8Array
     */
    this.OrganizationID = OrganizationID;
    /**
     * URL of the manufacturer's website. If none, an empty string shall be
     * provided.
     * @type string
     */
    this.Website = Website;
    /**
     * Contact information for business issues. If none, an empty string shall
     * be provided.
     * @type string
     */
    this.BusinessContact = BusinessContact;
    /**
     * Contact information for technical issues. If none, an empty string shall
     * be provided.
     * @type string
     */
    this.TechnicalContact = TechnicalContact;
  }
}
