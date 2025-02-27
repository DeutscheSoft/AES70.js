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
     * Service ID of host that contains the referenced object, as registered in
     * the network discovery system being used. Format depends on discovery
     * system type. NOTE For AES70-2023 and later, the value for this property
     * will normally be the Service Name of the target host's service, as
     * registered in DNS-SD - see [AES70-3]. For AES70-2018, the value for this
     * property will normally be the value of the **ServiceID** property of the
     * **OcaControlNetwork** object that describes the target host's network
     * connection. This property is inherited from **OcaApplicationNetwork**.
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
