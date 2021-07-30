/*
 * This file has been generated.
 */
/**
 * Interpolation law for ramper to use.
 * @class OcaRamperInterpolationLaw
 */
export class OcaRamperInterpolationLaw {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Linear: OcaRamperInterpolationLaw;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static ReverseLinear: OcaRamperInterpolationLaw;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Sine: OcaRamperInterpolationLaw;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Exponential: OcaRamperInterpolationLaw;

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

export type IOcaRamperInterpolationLaw =
  | OcaRamperInterpolationLaw
  | 'Linear'
  | 'ReverseLinear'
  | 'Sine'
  | 'Exponential'
  | 1
  | 2
  | 3
  | 4;
