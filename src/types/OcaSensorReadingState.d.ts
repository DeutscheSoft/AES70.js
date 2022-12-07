/*
 * This file has been generated.
 */
/**
 * Enum that describes whether an **OcaSensor**'s current reading value can be
 * trusted, and if not, why not.
 * @class OcaSensorReadingState
 */
export class OcaSensorReadingState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Unknown: OcaSensorReadingState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Valid: OcaSensorReadingState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Underrange: OcaSensorReadingState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Overrange: OcaSensorReadingState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Error: OcaSensorReadingState;

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

export type IOcaSensorReadingState =
  | OcaSensorReadingState
  | 'Unknown'
  | 'Valid'
  | 'Underrange'
  | 'Overrange'
  | 'Error'
  | 0
  | 1
  | 2
  | 3
  | 4;
