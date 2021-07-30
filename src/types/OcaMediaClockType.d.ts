/*
 * This file has been generated.
 */
/**
 * Types of media clocks.
 * @class OcaMediaClockType
 */
export class OcaMediaClockType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaMediaClockType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Internal: OcaMediaClockType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Network: OcaMediaClockType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static External: OcaMediaClockType;

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

export type IOcaMediaClockType =
  | OcaMediaClockType
  | 'None'
  | 'Internal'
  | 'Network'
  | 'External'
  | 0
  | 1
  | 2
  | 3;
