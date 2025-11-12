/*
 * This file has been generated.
 */
import {
  IOcaIP6AutoconfigMode,
  OcaIP6AutoconfigMode,
} from './OcaIP6AutoconfigMode.js';
import { IOcaIP6Gateway, OcaIP6Gateway } from './OcaIP6Gateway.js';

export declare interface IOcaIP6NetworkSettings {
  /**
   * Current interface address including prefix len
   * @type string
   */
  AddressAndPrefix: string;

  /**
   * {NONE, SLAAC, DHCP_STATELESS, DHCP_STATEFUL}
   * @type OcaIP6AutoconfigMode
   */
  AutoconfigMode: IOcaIP6AutoconfigMode;

  /**
   * Link-local address
   * @type string
   */
  LinkLocalAddress: string;

  /**
   * Network address
   * @type string
   */
  DhcpServerAddress: string;

  /**
   * Network address
   * @type string
   */
  DefaultGatewayAddress: string;

  /**
   * Gateway descriptor(s)
   * @type OcaIP6Gateway[]
   */
  AdditionalGateways: IOcaIP6Gateway[];

  /**
   * DNS server address(es)
   * @type string[]
   */
  DnsServerAddresses: string[];

  /**
   * Additional connection parameters, if any.
   * @type string
   */
  AdditionalParameters: string;
}

export declare class OcaIP6NetworkSettings implements IOcaIP6NetworkSettings {
  /**
   * IPv4 parameters for **OcaNetworkInterface.AdaptationData**
   * @class OcaIP6NetworkSettings
   */
  constructor(
    AddressAndPrefix: string,
    AutoconfigMode: OcaIP6AutoconfigMode,
    LinkLocalAddress: string,
    DhcpServerAddress: string,
    DefaultGatewayAddress: string,
    AdditionalGateways: OcaIP6Gateway[],
    DnsServerAddresses: string[],
    AdditionalParameters: string
  );

  /**
   * Current interface address including prefix len
   * @type string
   */
  AddressAndPrefix: string;

  /**
   * {NONE, SLAAC, DHCP_STATELESS, DHCP_STATEFUL}
   * @type OcaIP6AutoconfigMode
   */
  AutoconfigMode: OcaIP6AutoconfigMode;

  /**
   * Link-local address
   * @type string
   */
  LinkLocalAddress: string;

  /**
   * Network address
   * @type string
   */
  DhcpServerAddress: string;

  /**
   * Network address
   * @type string
   */
  DefaultGatewayAddress: string;

  /**
   * Gateway descriptor(s)
   * @type OcaIP6Gateway[]
   */
  AdditionalGateways: OcaIP6Gateway[];

  /**
   * DNS server address(es)
   * @type string[]
   */
  DnsServerAddresses: string[];

  /**
   * Additional connection parameters, if any.
   * @type string
   */
  AdditionalParameters: string;
}
