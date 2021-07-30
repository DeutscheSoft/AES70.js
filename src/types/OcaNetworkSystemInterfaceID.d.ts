/*
 * This file has been generated.
 */

export declare interface IOcaNetworkSystemInterfaceID {
  /**
   * Operating system handle for the interface the network uses to do I/O.
   * @type Uint8Array
   */
  SystemInterfaceHandle: Uint8Array;

  /**
   * The data network address that corresponds to this system interface.
   * @type Uint8Array
   */
  MyNetworkAddress: Uint8Array;
}

export declare class OcaNetworkSystemInterfaceID
  implements IOcaNetworkSystemInterfaceID {
  /**
   * ID of a system interface used by a network. Format is data network type dependent.
   * @class OcaNetworkSystemInterfaceID
   */
  constructor(SystemInterfaceHandle: Uint8Array, MyNetworkAddress: Uint8Array);

  /**
   * Operating system handle for the interface the network uses to do I/O.
   * @type Uint8Array
   */
  SystemInterfaceHandle: Uint8Array;

  /**
   * The data network address that corresponds to this system interface.
   * @type Uint8Array
   */
  MyNetworkAddress: Uint8Array;
}
