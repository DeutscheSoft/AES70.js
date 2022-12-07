/*
 * This file has been generated.
 */

export class OcaNetworkSystemInterfaceID {
  /**
   * ID of a system interface used by a network. Format is data network type
   * dependent.
   * @class OcaNetworkSystemInterfaceID
   */
  constructor(SystemInterfaceHandle, MyNetworkAddress) {
    /**
     * Operating system handle for the interface the network uses to do I/O.
     * @type Uint8Array
     */
    this.SystemInterfaceHandle = SystemInterfaceHandle;
    /**
     * The data network address that corresponds to this system interface.
     * @type Uint8Array
     */
    this.MyNetworkAddress = MyNetworkAddress;
  }
}
