/*
 * This file has been generated.
 */

export declare interface IOcaNetworkSystemInterfaceDescriptor {
  /**
   * Parameters for the operating system interface the network uses to do I/O.
   * @type Uint8Array
   */
  SystemInterfaceParameters: Uint8Array;

  /**
   * The data network address that corresponds to this system interface.
   * @type Uint8Array
   */
  MyNetworkAddress: Uint8Array;
}

export declare class OcaNetworkSystemInterfaceDescriptor
  implements IOcaNetworkSystemInterfaceDescriptor {
  /**
   * Descriptor of a system interface used by a network. Format is data network
   * type dependent.
   * @class OcaNetworkSystemInterfaceDescriptor
   */
  constructor(
    SystemInterfaceParameters: Uint8Array,
    MyNetworkAddress: Uint8Array
  );

  /**
   * Parameters for the operating system interface the network uses to do I/O.
   * @type Uint8Array
   */
  SystemInterfaceParameters: Uint8Array;

  /**
   * The data network address that corresponds to this system interface.
   * @type Uint8Array
   */
  MyNetworkAddress: Uint8Array;
}
