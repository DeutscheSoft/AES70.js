/*
 * This file has been generated.
 */
/**
 * Time mode of **OcaTask** agent.
 * @class OcaTimeMode
 */
export class OcaTimeMode {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Absolute: OcaTimeMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Relative: OcaTimeMode;

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

export type IOcaTimeMode = OcaTimeMode | 'Absolute' | 'Relative' | 1 | 2;
