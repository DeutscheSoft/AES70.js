/*
 * This file has been generated.
 */
/**
 * Enumeration of level meter laws.
 * @class OcaLevelMeterLaw
 */
export class OcaLevelMeterLaw {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static VU: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static StandardVU: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static PPM1: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static PPM2: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static LKFS: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static RMS: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static Peak: OcaLevelMeterLaw;
  /**
   * Singleton object corresponding to the entry with value ``128``.
   */
  static ProprietaryValueBase: OcaLevelMeterLaw;

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

export type IOcaLevelMeterLaw =
  | OcaLevelMeterLaw
  | 'VU'
  | 'StandardVU'
  | 'PPM1'
  | 'PPM2'
  | 'LKFS'
  | 'RMS'
  | 'Peak'
  | 'ProprietaryValueBase'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 128;
