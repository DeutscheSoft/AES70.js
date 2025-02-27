/*
 * This file has been generated.
 */
/**
 * Security types for stream endpoints
 * @class OcaSecurityType
 */
export class OcaSecurityType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaSecurityType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Default: OcaSecurityType;

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

export type IOcaSecurityType = OcaSecurityType | 'None' | 'Default' | 0 | 1;
