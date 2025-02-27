/*
 * This file has been generated.
 */
/**
 * Types of sampling rate converters
 * @class OcaSamplingRateConverterType
 */
export class OcaSamplingRateConverterType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaSamplingRateConverterType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Synchronous: OcaSamplingRateConverterType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Asynchronous: OcaSamplingRateConverterType;

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

export type IOcaSamplingRateConverterType =
  | OcaSamplingRateConverterType
  | 'None'
  | 'Synchronous'
  | 'Asynchronous'
  | 0
  | 1
  | 2;
