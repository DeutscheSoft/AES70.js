/*
 * This file has been generated.
 */
/**
 * Reasons why a Commandset terminated
 * @class OcaGenericEndState
 */
export class OcaGenericEndState {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static CompletedNormally: OcaGenericEndState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static CompletedAbnormally: OcaGenericEndState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Interrupted: OcaGenericEndState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Failed: OcaGenericEndState;

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

export type IOcaGenericEndState =
  | OcaGenericEndState
  | 'CompletedNormally'
  | 'CompletedAbnormally'
  | 'Interrupted'
  | 'Failed'
  | 1
  | 2
  | 3
  | 4;
