/*
 * This file has been generated.
 */

export class OcaNetworkSystemInterfaceDescriptor {
  /**
   * Descriptor of a system interface used by a network. Format is data network
   * type dependent.
   * @class OcaNetworkSystemInterfaceDescriptor
   */
  constructor(SystemInterfaceParameters, MyNetworkAddress) {
    /**
     * Parameters for the operating system interface the network uses to do I/O.
     * @type Uint8Array
     */
    this.SystemInterfaceParameters = SystemInterfaceParameters;
    /**
     * The data network address that corresponds to this system interface.
     * @type Uint8Array
     */
    this.MyNetworkAddress = MyNetworkAddress;
  }
}
