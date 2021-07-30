/*
 * This file has been generated.
 */
/**
 * Enumeration of types of delay units that are available in OCA.
 * @class OcaDelayUnit
 */
export class OcaDelayUnit {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Time: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Distance: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Samples: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Microseconds: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Milliseconds: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static Centimeters: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static Inches: OcaDelayUnit;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static Feet: OcaDelayUnit;

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

export type IOcaDelayUnit =
  | OcaDelayUnit
  | 'Time'
  | 'Distance'
  | 'Samples'
  | 'Microseconds'
  | 'Milliseconds'
  | 'Centimeters'
  | 'Inches'
  | 'Feet'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;
