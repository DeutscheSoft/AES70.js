/*
 * This file has been generated.
 */
/**
 * Types of time references.
 * @class OcaTimeReferenceType
 */
export class OcaTimeReferenceType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaTimeReferenceType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Local: OcaTimeReferenceType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Private: OcaTimeReferenceType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static GPS: OcaTimeReferenceType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Galileo: OcaTimeReferenceType;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static GLONASS: OcaTimeReferenceType;

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

export type IOcaTimeReferenceType =
  | OcaTimeReferenceType
  | 'Undefined'
  | 'Local'
  | 'Private'
  | 'GPS'
  | 'Galileo'
  | 'GLONASS'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5;
