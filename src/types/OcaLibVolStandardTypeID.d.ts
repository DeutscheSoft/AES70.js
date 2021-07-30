/*
 * This file has been generated.
 */
/**
 * Enum that describes type of data in a standard library volume.
 * @class OcaLibVolStandardTypeID
 */
export class OcaLibVolStandardTypeID {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaLibVolStandardTypeID;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static ParamSet: OcaLibVolStandardTypeID;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Patch: OcaLibVolStandardTypeID;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Program: OcaLibVolStandardTypeID;

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

export type IOcaLibVolStandardTypeID =
  | OcaLibVolStandardTypeID
  | 'None'
  | 'ParamSet'
  | 'Patch'
  | 'Program'
  | 0
  | 1
  | 2
  | 3;
