/*
 * This file has been generated.
 */

export declare interface IOcaGlobalTypeIdentifier {
  /**
   * Unique identifier of organization that has authority over this reusable
   * block type. A zero value indicates a global type defined by the AES70
   * standard itself.
   * @type Uint8Array
   */
  Authority: Uint8Array;

  /**
   * ID of library volume type defined by given Authority. Value is unique
   * within the given Authority.
   * @type number
   */
  ID: number;
}

export declare class OcaGlobalTypeIdentifier
  implements IOcaGlobalTypeIdentifier {
  /**
   * Globally unique identifier of something that belongs to an organization.
   * @class OcaGlobalTypeIdentifier
   */
  constructor(Authority: Uint8Array, ID: number);

  /**
   * Unique identifier of organization that has authority over this reusable
   * block type. A zero value indicates a global type defined by the AES70
   * standard itself.
   * @type Uint8Array
   */
  Authority: Uint8Array;

  /**
   * ID of library volume type defined by given Authority. Value is unique
   * within the given Authority.
   * @type number
   */
  ID: number;
}
