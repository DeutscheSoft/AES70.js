/*
 * This file has been generated.
 */
/**
 * Library volume access modes
 * @class OcaLibAccess
 */
export class OcaLibAccess {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaLibAccess;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static ReadOnly: OcaLibAccess;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static ReadExpand: OcaLibAccess;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Full: OcaLibAccess;

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

export type IOcaLibAccess =
  | OcaLibAccess
  | 'None'
  | 'ReadOnly'
  | 'ReadExpand'
  | 'Full'
  | 0
  | 1
  | 2
  | 3;
