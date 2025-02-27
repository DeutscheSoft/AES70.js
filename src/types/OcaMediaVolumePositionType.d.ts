/*
 * This file has been generated.
 */
/**
 * Type of media position specified: samples or nanoseconds
 * @class OcaMediaVolumePositionType
 */
export class OcaMediaVolumePositionType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Samples: OcaMediaVolumePositionType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Seconds: OcaMediaVolumePositionType;

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

export type IOcaMediaVolumePositionType =
  | OcaMediaVolumePositionType
  | 'Samples'
  | 'Seconds'
  | 0
  | 1;
