/*
 * This file has been generated.
 */
/**
 * Autoconfiguration mode
 * @class OcaIP6AutoconfigMode
 */
export class OcaIP6AutoconfigMode {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NONE: OcaIP6AutoconfigMode;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static SLAAC: OcaIP6AutoconfigMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static DHCP_STATELESS: OcaIP6AutoconfigMode;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static DHCP_STATEFUL: OcaIP6AutoconfigMode;

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

export type IOcaIP6AutoconfigMode =
  | OcaIP6AutoconfigMode
  | 'NONE'
  | 'SLAAC'
  | 'DHCP_STATELESS'
  | 'DHCP_STATEFUL'
  | 0
  | 1
  | 2
  | 3;
