/*
 * This file has been generated.
 */
/**
 * Enumeration of relational operators that can be used in OCA classes.
 * @class OcaRelationalOperator
 */
export class OcaRelationalOperator {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaRelationalOperator;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Equality: OcaRelationalOperator;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Inequality: OcaRelationalOperator;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static GreaterThan: OcaRelationalOperator;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static GreaterThanOrEqual: OcaRelationalOperator;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static LessThan: OcaRelationalOperator;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static LessThanOrEqual: OcaRelationalOperator;

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

export type IOcaRelationalOperator =
  | OcaRelationalOperator
  | 'None'
  | 'Equality'
  | 'Inequality'
  | 'GreaterThan'
  | 'GreaterThanOrEqual'
  | 'LessThan'
  | 'LessThanOrEqual'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;
