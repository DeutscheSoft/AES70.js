/*
 * This file has been generated.
 */
/**
 * Options for media playback
 * @class OcaMediaPlayOption
 */
export class OcaMediaPlayOption {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Normal: OcaMediaPlayOption;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Autoclose: OcaMediaPlayOption;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static RepeatInterval: OcaMediaPlayOption;

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

export type IOcaMediaPlayOption =
  | OcaMediaPlayOption
  | 'Normal'
  | 'Autoclose'
  | 'RepeatInterval'
  | 0
  | 1
  | 2;
