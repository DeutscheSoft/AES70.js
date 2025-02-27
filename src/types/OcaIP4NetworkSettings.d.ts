/*
 * This file has been generated.
 */
import {
  IOcaIP4AutoconfigMode,
  OcaIP4AutoconfigMode,
} from './OcaIP4AutoconfigMode';
import { IOcaIP4Gateway, OcaIP4Gateway } from './OcaIP4Gateway';

export declare interface IOcaIP4NetworkSettings {
  /**
   * Network address and prefix of this interface
   * @type string
   */
  AddressAndPrefix: string;

  /**
   * See **OcaIP4AutoconfigMode** definition.
   * @type OcaIP4AutoconfigMode
   */
  AutoconfigMode: IOcaIP4AutoconfigMode;

  /**
   * DHCP server address
   * @type string
   */
  DhcpServerAddress: string;

  /**
   * Address of default gateway. 0.0.0.0 means there is none.
   * @type string
   */
  DefaultGatewayAddress: string;

  /**
   * Descriptor(s) of specific gateway(s). May be empty.
   * @type OcaIP4Gateway[]
   */
  AdditionalGateways: IOcaIP4Gateway[];

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

export declare class OcaIP4NetworkSettings implements IOcaIP4NetworkSettings {
  /**
   * IPv4 parameters for **OcaNetworkInterface. ** Stored in the**
   * .CurrentNetworkSettings** and **.TargetNetworkSettings** properties.
   * @class OcaIP4NetworkSettings
   */
  constructor(
    AddressAndPrefix: string,
    AutoconfigMode: OcaIP4AutoconfigMode,
    DhcpServerAddress: string,
    DefaultGatewayAddress: string,
    AdditionalGateways: OcaIP4Gateway[],
    DnsServerAddresses: string[],
    AdditionalParameters: string
  );

  /**
   * Network address and prefix of this interface
   * @type string
   */
  AddressAndPrefix: string;

  /**
   * See **OcaIP4AutoconfigMode** definition.
   * @type OcaIP4AutoconfigMode
   */
  AutoconfigMode: OcaIP4AutoconfigMode;

  /**
   * DHCP server address
   * @type string
   */
  DhcpServerAddress: string;

  /**
   * Address of default gateway. 0.0.0.0 means there is none.
   * @type string
   */
  DefaultGatewayAddress: string;

  /**
   * Descriptor(s) of specific gateway(s). May be empty.
   * @type OcaIP4Gateway[]
   */
  AdditionalGateways: OcaIP4Gateway[];

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
