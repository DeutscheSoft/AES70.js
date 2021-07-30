/*
 * This file has been generated.
 */

export declare interface IOcaLibVolIdentifier {
  /**
   * Library that holds the LibVol in question.
   * @type number
   */
  Library: number;

  /**
   * ID of LibVol within the given library.
   * @type number
   */
  ID: number;
}

export declare class OcaLibVolIdentifier implements IOcaLibVolIdentifier {
  /**
   * Unique identifier of a library volume within the device.
   * @class OcaLibVolIdentifier
   */
  constructor(Library: number, ID: number);

  /**
   * Library that holds the LibVol in question.
   * @type number
   */
  Library: number;

  /**
   * ID of LibVol within the given library.
   * @type number
   */
  ID: number;
}
