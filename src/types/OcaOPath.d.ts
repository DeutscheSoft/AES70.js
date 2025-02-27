/*
 * This file has been generated.
 */

export declare interface IOcaOPath {
  /**
   * Service ID of host that contains the referenced object, as registered in
   * the network discovery system being used. Format depends on discovery system
   * type. NOTE For AES70-2023 and later, the value for this property will
   * normally be the Service Name of the target host's service, as registered in
   * DNS-SD - see [AES70-3]. For AES70-2018, the value for this property will
   * normally be the value of the **ServiceID** property of the
   * **OcaControlNetwork** object that describes the target host's network
   * connection. This property is inherited from **OcaApplicationNetwork**.
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
   * Service ID of host that contains the referenced object, as registered in
   * the network discovery system being used. Format depends on discovery system
   * type. NOTE For AES70-2023 and later, the value for this property will
   * normally be the Service Name of the target host's service, as registered in
   * DNS-SD - see [AES70-3]. For AES70-2018, the value for this property will
   * normally be the value of the **ServiceID** property of the
   * **OcaControlNetwork** object that describes the target host's network
   * connection. This property is inherited from **OcaApplicationNetwork**.
   * @type Uint8Array
   */
  HostID: Uint8Array;

  /**
   * Object number of referenced object.
   * @type number
   */
  ONo: number;
}
