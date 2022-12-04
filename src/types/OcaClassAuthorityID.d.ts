/*
 * This file has been generated.
 */

export declare interface IOcaClassAuthorityID {
  /**
   * Sentinel signifying an Authority ID
   * @type number
   */
  Sentinel: number;

  /**
   * Reserved, must be zero.
   * @type number
   */
  Reserved: number;

  /**
   * Authority's IEEE public Company ID (public CID) or IEEE Organizational Unique Identifier (OUI), or the value zero, which signifies the Authority of this AES70 standard.
   * @type Uint8Array
   */
  OrganizationID: Uint8Array;
}

export declare class OcaClassAuthorityID implements IOcaClassAuthorityID {
  /**
   * Class authority identifier. Identifies the authority for a class's definition.
   * @class OcaClassAuthorityID
   */
  constructor(Sentinel: number, Reserved: number, OrganizationID: Uint8Array);

  /**
   * Sentinel signifying an Authority ID
   * @type number
   */
  Sentinel: number;

  /**
   * Reserved, must be zero.
   * @type number
   */
  Reserved: number;

  /**
   * Authority's IEEE public Company ID (public CID) or IEEE Organizational Unique Identifier (OUI), or the value zero, which signifies the Authority of this AES70 standard.
   * @type Uint8Array
   */
  OrganizationID: Uint8Array;
}
