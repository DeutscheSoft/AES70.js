/*
 * This file has been generated.
 */
/**
 * Network control protocols available.
 * @class OcaNetworkControlProtocol
 */
export class OcaNetworkControlProtocol {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaNetworkControlProtocol;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static OCP01: OcaNetworkControlProtocol;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static OCP02: OcaNetworkControlProtocol;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static OCP03: OcaNetworkControlProtocol;

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

export type IOcaNetworkControlProtocol =
  | OcaNetworkControlProtocol
  | 'None'
  | 'OCP01'
  | 'OCP02'
  | 'OCP03'
  | 0
  | 1
  | 2
  | 3;
