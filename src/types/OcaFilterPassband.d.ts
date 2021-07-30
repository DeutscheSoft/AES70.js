/*
 * This file has been generated.
 */
/**
 * Enumeration of passband types that can be used by OCA objects.
 * @class OcaFilterPassband
 */
export class OcaFilterPassband {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static HiPass: OcaFilterPassband;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static LowPass: OcaFilterPassband;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static BandPass: OcaFilterPassband;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static BandReject: OcaFilterPassband;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static AllPass: OcaFilterPassband;

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

export type IOcaFilterPassband =
  | OcaFilterPassband
  | 'HiPass'
  | 'LowPass'
  | 'BandPass'
  | 'BandReject'
  | 'AllPass'
  | 1
  | 2
  | 3
  | 4
  | 5;
