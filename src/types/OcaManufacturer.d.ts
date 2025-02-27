/*
 * This file has been generated.
 */

export declare interface IOcaManufacturer {
  /**
   * Manufacturer's name
   * @type string
   */
  Name: string;

  /**
   * Manufacturer's IEEE OUI or CID, if any. Zero value means OUI or CID is not
   * specified.
   * @type Uint8Array
   */
  OrganizationID: Uint8Array;

  /**
   * URL of the manufacturer's website. If none, an empty string shall be
   * provided.
   * @type string
   */
  Website: string;

  /**
   * Contact information for business issues. If none, an empty string shall be
   * provided.
   * @type string
   */
  BusinessContact: string;

  /**
   * Contact information for technical issues. If none, an empty string shall be
   * provided.
   * @type string
   */
  TechnicalContact: string;
}

export declare class OcaManufacturer implements IOcaManufacturer {
  /**
   * Structure that describes a manufacturer.
   * @class OcaManufacturer
   */
  constructor(
    Name: string,
    OrganizationID: Uint8Array,
    Website: string,
    BusinessContact: string,
    TechnicalContact: string
  );

  /**
   * Manufacturer's name
   * @type string
   */
  Name: string;

  /**
   * Manufacturer's IEEE OUI or CID, if any. Zero value means OUI or CID is not
   * specified.
   * @type Uint8Array
   */
  OrganizationID: Uint8Array;

  /**
   * URL of the manufacturer's website. If none, an empty string shall be
   * provided.
   * @type string
   */
  Website: string;

  /**
   * Contact information for business issues. If none, an empty string shall be
   * provided.
   * @type string
   */
  BusinessContact: string;

  /**
   * Contact information for technical issues. If none, an empty string shall be
   * provided.
   * @type string
   */
  TechnicalContact: string;
}
