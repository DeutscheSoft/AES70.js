/*
 * This file has been generated.
 */
/**
 * Enumeration of units of measure that can be used in OCA classes. Only SI
 * (base or derived) units are specified, so that internal calculations will not
 * need to convert. If conversion is needed it should only be done in user
 * interfaces. The datatype of a reading expressed in one of these units of
 * measure is FLOAT.
 * @class OcaUnitOfMeasure
 */
export class OcaUnitOfMeasure {
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Ampere: OcaUnitOfMeasure;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static DegreeCelsius: OcaUnitOfMeasure;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Hertz: OcaUnitOfMeasure;
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaUnitOfMeasure;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Ohm: OcaUnitOfMeasure;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Volt: OcaUnitOfMeasure;

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

export type IOcaUnitOfMeasure =
  | OcaUnitOfMeasure
  | 'Ampere'
  | 'DegreeCelsius'
  | 'Hertz'
  | 'None'
  | 'Ohm'
  | 'Volt'
  | 4
  | 2
  | 1
  | 0
  | 5
  | 3;
