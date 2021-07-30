/*
 * This file has been generated.
 */
/**
 * Enumeration of classicalr filter types that can be used by OCA objects.
 * @class OcaClassicalFilterShape
 */
export class OcaClassicalFilterShape {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Butterworth: OcaClassicalFilterShape;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Bessel: OcaClassicalFilterShape;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Chebyshev: OcaClassicalFilterShape;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static LinkwitzRiley: OcaClassicalFilterShape;

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

export type IOcaClassicalFilterShape =
  | OcaClassicalFilterShape
  | 'Butterworth'
  | 'Bessel'
  | 'Chebyshev'
  | 'LinkwitzRiley'
  | 1
  | 2
  | 3
  | 4;
