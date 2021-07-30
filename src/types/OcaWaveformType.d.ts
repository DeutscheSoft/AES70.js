/*
 * This file has been generated.
 */
/**
 * Enumeration of waveform types that can be used by OCA objects.
 * @class OcaWaveformType
 */
export class OcaWaveformType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static DC: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Sine: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Square: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Impulse: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static NoisePink: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static NoiseWhite: OcaWaveformType;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static PolarityTest: OcaWaveformType;

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

export type IOcaWaveformType =
  | OcaWaveformType
  | 'None'
  | 'DC'
  | 'Sine'
  | 'Square'
  | 'Impulse'
  | 'NoisePink'
  | 'NoiseWhite'
  | 'PolarityTest'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;
