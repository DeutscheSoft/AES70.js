/*
 * This file has been generated.
 */
/**
 * Enumeration that designates the type of position coordinate system used. For
 * details, see the AES70-1 description of the **OcaPhysicalPosition** class.
 * @class OcaPositionCoordinateSystem
 */
export class OcaPositionCoordinateSystem {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Robotic: OcaPositionCoordinateSystem;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static ItuAudioObjectBasedPolar: OcaPositionCoordinateSystem;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static ItuAudioObjectBasedCartesian: OcaPositionCoordinateSystem;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static ItuAudioSceneBasedPolar: OcaPositionCoordinateSystem;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static ItuAudioSceneBasedCartesian: OcaPositionCoordinateSystem;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static NAV: OcaPositionCoordinateSystem;
  /**
   * Singleton object corresponding to the entry with value ``128``.
   */
  static ProprietaryBase: OcaPositionCoordinateSystem;

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

export type IOcaPositionCoordinateSystem =
  | OcaPositionCoordinateSystem
  | 'Robotic'
  | 'ItuAudioObjectBasedPolar'
  | 'ItuAudioObjectBasedCartesian'
  | 'ItuAudioSceneBasedPolar'
  | 'ItuAudioSceneBasedCartesian'
  | 'NAV'
  | 'ProprietaryBase'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 128;
