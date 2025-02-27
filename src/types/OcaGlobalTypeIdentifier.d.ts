/*
 * This file has been generated.
 */

export declare interface IOcaGlobalTypeIdentifier {
  /**
   * Unique identifier of organization that has authority over this reusable
   * block type.
   * @type Uint8Array
   */
  Organization: Uint8Array;

  /**
   * ID of item defined by given Authority. Value is unique within the given
   * Authority.
   * @type number
   */
  ID: number;
}

export declare class OcaGlobalTypeIdentifier
  implements IOcaGlobalTypeIdentifier {
  /**
   * Globally unique identifier of something that belongs to an organization. An
   * identifier with both Authority and ID fields of zero shall be interpreted
   * as a null value.
   * @class OcaGlobalTypeIdentifier
   */
  constructor(Organization: Uint8Array, ID: number);

  /**
   * Unique identifier of organization that has authority over this reusable
   * block type.
   * @type Uint8Array
   */
  Organization: Uint8Array;

  /**
   * ID of item defined by given Authority. Value is unique within the given
   * Authority.
   * @type number
   */
  ID: number;
}
