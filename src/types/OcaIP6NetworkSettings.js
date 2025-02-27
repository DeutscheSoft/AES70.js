/*
 * This file has been generated.
 */

export class OcaIP6NetworkSettings {
  /**
   * IPv4 parameters for **OcaNetworkInterface.AdaptationData**
   * @class OcaIP6NetworkSettings
   */
  constructor(
    AddressAndPrefix,
    AutoconfigMode,
    LinkLocalAddress,
    DhcpServerAddress,
    DefaultGatewayAddress,
    AdditionalGateways,
    DnsServerAddresses,
    AdditionalParameters
  ) {
    /**
     * Current interface address including prefix len
     * @type string
     */
    this.AddressAndPrefix = AddressAndPrefix;
    /**
     * {NONE, SLAAC, DHCP_STATELESS, DHCP_STATEFUL}
     * @type OcaIP6AutoconfigMode
     */
    this.AutoconfigMode = AutoconfigMode;
    /**
     * Link-local address
     * @type string
     */
    this.LinkLocalAddress = LinkLocalAddress;
    /**
     * Network address
     * @type string
     */
    this.DhcpServerAddress = DhcpServerAddress;
    /**
     * Network address
     * @type string
     */
    this.DefaultGatewayAddress = DefaultGatewayAddress;
    /**
     * Gateway descriptor(s)
     * @type OcaIP6Gateway[]
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
