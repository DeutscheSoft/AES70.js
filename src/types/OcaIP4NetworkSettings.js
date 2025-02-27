/*
 * This file has been generated.
 */

export class OcaIP4NetworkSettings {
  /**
   * IPv4 parameters for **OcaNetworkInterface. ** Stored in the**
   * .CurrentNetworkSettings** and **.TargetNetworkSettings** properties.
   * @class OcaIP4NetworkSettings
   */
  constructor(
    AddressAndPrefix,
    AutoconfigMode,
    DhcpServerAddress,
    DefaultGatewayAddress,
    AdditionalGateways,
    DnsServerAddresses,
    AdditionalParameters
  ) {
    /**
     * Network address and prefix of this interface
     * @type string
     */
    this.AddressAndPrefix = AddressAndPrefix;
    /**
     * See **OcaIP4AutoconfigMode** definition.
     * @type OcaIP4AutoconfigMode
     */
    this.AutoconfigMode = AutoconfigMode;
    /**
     * DHCP server address
     * @type string
     */
    this.DhcpServerAddress = DhcpServerAddress;
    /**
     * Address of default gateway. 0.0.0.0 means there is none.
     * @type string
     */
    this.DefaultGatewayAddress = DefaultGatewayAddress;
    /**
     * Descriptor(s) of specific gateway(s). May be empty.
     * @type OcaIP4Gateway[]
     */
    this.AdditionalGateways = AdditionalGateways;
    /**
     * DNS server address(es)
     * @type string[]
     */
    this.DnsServerAddresses = DnsServerAddresses;
    /**
     * Additional connection parameters, if any.
     * @type string
     */
    this.AdditionalParameters = AdditionalParameters;
  }
}
