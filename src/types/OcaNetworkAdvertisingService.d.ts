/*
 * This file has been generated.
 */
/**
 * Network advertising services.
 * @class OcaNetworkAdvertisingService
 */
export class OcaNetworkAdvertisingService {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static DNSSD: OcaNetworkAdvertisingService;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static MDNS_DNSSD: OcaNetworkAdvertisingService;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static NMOS: OcaNetworkAdvertisingService;
  /**
   * Singleton object corresponding to the entry with value ``128``.
   */
  static ExpansionBase: OcaNetworkAdvertisingService;

  /**
   * Returns the numeric value of this enum entry.
   */
  valueOf(): number;

  /**
   * Returns the string representation of this enum entry.
   */
  toString(): string;

  /**
   * Returns the name of an enum entry.
   */
  static getName(value: number): string;

  /**
   * Returns the value of an enum entry name.
   */
  static getValue(name: string): number;
}

export type IOcaNetworkAdvertisingService =
  | OcaNetworkAdvertisingService
  | 'DNSSD'
  | 'MDNS_DNSSD'
  | 'NMOS'
  | 'ExpansionBase'
  | 0
  | 1
  | 2
  | 128;
