/*
 * This file has been generated.
 */

/**
 * ID of a system interface used by a network. Format is data network
 * type dependent.
 */
export class OcaNetworkSystemInterfaceID {
  constructor(SystemInterfaceHandle, MyNetworkAddress) {
    /**
     * Operating system handle for the interface the network uses to do I/O.
     * @member RemoteControlClasses.OcaNetworkSystemInterfaceID#OnSystemInterfaceHandleChanged {PropertyEvent<string>} - This event is emitted when SystemInterfaceHandle changes in the remote object.
     */
    this.SystemInterfaceHandle = SystemInterfaceHandle;
    /**
     * The data network address that corresponds to this system interface.
     * @member RemoteControlClasses.OcaNetworkSystemInterfaceID#OnMyNetworkAddressChanged {PropertyEvent<OcaNetworkAddress>} - This event is emitted when MyNetworkAddress changes in the remote object.
     */
    this.MyNetworkAddress = MyNetworkAddress;
  }
}
