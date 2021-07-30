/*
 * This file has been generated.
 */
/**
 * Polarity states
 * @class OcaPolarityState
 */
export class OcaPolarityState {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static NonInverted: OcaPolarityState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Inverted: OcaPolarityState;

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

export type IOcaPolarityState =
  | OcaPolarityState
  | 'NonInverted'
  | 'Inverted'
  | 1
  | 2;
