/*
 * This file has been generated.
 */
/**
 * Enum that describes whether a port is for input or output.
 * @class OcaPortMode
 */
export class OcaPortMode {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Input: OcaPortMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Output: OcaPortMode;

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

export type IOcaPortMode = OcaPortMode | 'Input' | 'Output' | 1 | 2;
