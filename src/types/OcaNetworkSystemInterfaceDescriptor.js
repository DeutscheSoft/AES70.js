/*
 * This file has been generated.
 */

/**
 * Descriptor of a system interface used by a network. Format is data
 * network type dependent.
 */
export class OcaNetworkSystemInterfaceDescriptor {
  constructor(SystemInterfaceParameters, MyNetworkAddress) {
    /**
     * Parameters for the operating system interface the network uses to do
     * I/O.
     * @member RemoteControlClasses.OcaNetworkSystemInterfaceDescriptor#OnSystemInterfaceParametersChanged {PropertyEvent<string>} - This event is emitted when SystemInterfaceParameters changes in the remote object.
     */
    this.SystemInterfaceParameters = SystemInterfaceParameters;
    /**
     * The data network address that corresponds to this system interface.
     * @member RemoteControlClasses.OcaNetworkSystemInterfaceDescriptor#OnMyNetworkAddressChanged {PropertyEvent<OcaNetworkAddress>} - This event is emitted when MyNetworkAddress changes in the remote object.
     */
    this.MyNetworkAddress = MyNetworkAddress;
  }
}
