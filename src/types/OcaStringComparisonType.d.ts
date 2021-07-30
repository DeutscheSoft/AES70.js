/*
 * This file has been generated.
 */
/**
 * Type of string comparison.
 * @class OcaStringComparisonType
 */
export class OcaStringComparisonType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Exact: OcaStringComparisonType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Substring: OcaStringComparisonType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Contains: OcaStringComparisonType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static ExactCaseInsensitive: OcaStringComparisonType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static SubstringCaseInsensitive: OcaStringComparisonType;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static ContainsCaseInsensitive: OcaStringComparisonType;

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

export type IOcaStringComparisonType =
  | OcaStringComparisonType
  | 'Exact'
  | 'Substring'
  | 'Contains'
  | 'ExactCaseInsensitive'
  | 'SubstringCaseInsensitive'
  | 'ContainsCaseInsensitive'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5;
