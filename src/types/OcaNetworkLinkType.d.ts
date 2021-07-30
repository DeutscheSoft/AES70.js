/*
 * This file has been generated.
 */
/**
 * Types of layer 2 networks.
 * @class OcaNetworkLinkType
 */
export class OcaNetworkLinkType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaNetworkLinkType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static EthernetWired: OcaNetworkLinkType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static EthernetWireless: OcaNetworkLinkType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static USB: OcaNetworkLinkType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static SerialP2P: OcaNetworkLinkType;

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

export type IOcaNetworkLinkType =
  | OcaNetworkLinkType
  | 'None'
  | 'EthernetWired'
  | 'EthernetWireless'
  | 'USB'
  | 'SerialP2P'
  | 0
  | 1
  | 2
  | 3
  | 4;
