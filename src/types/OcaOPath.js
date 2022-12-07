/*
 * This file has been generated.
 */

export class OcaOPath {
  /**
   * Object address. Composite of network address in which object resides, and
   * object number.
   * @class OcaOPath
   */
  constructor(HostID, ONo) {
    /**
     * Host ID of device that contains the referenced object.
     * @type Uint8Array
     */
    this.HostID = HostID;
    /**
     * Object number of referenced object.
     * @type number
     */
    this.ONo = ONo;
  }
}
