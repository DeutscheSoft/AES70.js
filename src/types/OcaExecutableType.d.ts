/*
 * This file has been generated.
 */
/**
 * Types of executable - program or commandset
 * @class OcaExecutableType
 */
export class OcaExecutableType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaExecutableType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Program: OcaExecutableType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Commandset: OcaExecutableType;

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

export type IOcaExecutableType =
  | OcaExecutableType
  | 'Undefined'
  | 'Program'
  | 'Commandset'
  | 0
  | 1
  | 2;
