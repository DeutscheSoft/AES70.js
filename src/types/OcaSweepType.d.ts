/*
 * This file has been generated.
 */
/**
 * Enumeration of waveform types that can be used by OCA objects.
 * @class OcaSweepType
 */
export class OcaSweepType {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Linear: OcaSweepType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Logarithmic: OcaSweepType;
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaSweepType;

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

export type IOcaSweepType =
  | OcaSweepType
  | 'Linear'
  | 'Logarithmic'
  | 'None'
  | 1
  | 2
  | 0;
