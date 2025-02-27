/*
 * This file has been generated.
 */
/**
 * Availability states of a time source
 * @class OcaTimeSourceAvailability
 */
export class OcaTimeSourceAvailability {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Unavailable: OcaTimeSourceAvailability;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Available: OcaTimeSourceAvailability;

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

export type IOcaTimeSourceAvailability =
  | OcaTimeSourceAvailability
  | 'Unavailable'
  | 'Available'
  | 0
  | 1;
