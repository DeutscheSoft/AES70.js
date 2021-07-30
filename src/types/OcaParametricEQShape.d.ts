/*
 * This file has been generated.
 */
/**
 * Enumeration of curve shapes used by OcaFilterParametric.
 * @class OcaParametricEQShape
 */
export class OcaParametricEQShape {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static PEQ: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static LowShelv: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static HighShelv: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static LowPass: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static HighPass: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static BandPass: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static AllPass: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static Notch: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``9``.
   */
  static ToneControlLowFixed: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``10``.
   */
  static ToneControlLowSliding: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``11``.
   */
  static ToneControlHighFixed: OcaParametricEQShape;
  /**
   * Singleton object corresponding to the entry with value ``12``.
   */
  static ToneControlHighSliding: OcaParametricEQShape;

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

export type IOcaParametricEQShape =
  | OcaParametricEQShape
  | 'None'
  | 'PEQ'
  | 'LowShelv'
  | 'HighShelv'
  | 'LowPass'
  | 'HighPass'
  | 'BandPass'
  | 'AllPass'
  | 'Notch'
  | 'ToneControlLowFixed'
  | 'ToneControlLowSliding'
  | 'ToneControlHighFixed'
  | 'ToneControlHighSliding'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
