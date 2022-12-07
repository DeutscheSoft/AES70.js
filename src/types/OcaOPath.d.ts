/*
 * This file has been generated.
 */

export declare interface IOcaOPath {
  /**
   * Host ID of device that contains the referenced object.
   * @type Uint8Array
   */
  HostID: Uint8Array;

  /**
   * Object number of referenced object.
   * @type number
   */
  ONo: number;
}

export declare class OcaOPath implements IOcaOPath {
  /**
   * Object address. Composite of network address in which object resides, and
   * object number.
   * @class OcaOPath
   */
  constructor(HostID: Uint8Array, ONo: number);

  /**
   * Host ID of device that contains the referenced object.
   * @type Uint8Array
   */
  HostID: Uint8Array;

  /**
   * Object number of referenced object.
   * @type number
   */
  ONo: number;
}
