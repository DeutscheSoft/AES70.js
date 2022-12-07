/*
 * This file has been generated.
 */
/**
 * Enumeration of the types of level detector characteristics. Used in dynamics
 * classes and for sensors.
 * @class OcaLevelDetectionLaw
 */
export class OcaLevelDetectionLaw {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaLevelDetectionLaw;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static RMS: OcaLevelDetectionLaw;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Peak: OcaLevelDetectionLaw;

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

export type IOcaLevelDetectionLaw =
  | OcaLevelDetectionLaw
  | 'None'
  | 'RMS'
  | 'Peak'
  | 0
  | 1
  | 2;
