/*
 * This file has been generated.
 */
/**
 * Autoconfiguration mode
 * @class OcaIP4AutoconfigMode
 */
export class OcaIP4AutoconfigMode {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaIP4AutoconfigMode;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static DHCP: OcaIP4AutoconfigMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static DHCP_LINKLOCAL: OcaIP4AutoconfigMode;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static LINKLOCAL: OcaIP4AutoconfigMode;

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

export type IOcaIP4AutoconfigMode =
  | OcaIP4AutoconfigMode
  | 'None'
  | 'DHCP'
  | 'DHCP_LINKLOCAL'
  | 'LINKLOCAL'
  | 0
  | 1
  | 2
  | 3;
