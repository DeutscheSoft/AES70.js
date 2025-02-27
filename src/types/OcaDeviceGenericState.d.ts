/*
 * This file has been generated.
 */
/**
 * Generic device states
 * @class OcaDeviceGenericState
 */
export class OcaDeviceGenericState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NormalOperation: OcaDeviceGenericState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Initializaing: OcaDeviceGenericState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Updating: OcaDeviceGenericState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Fault: OcaDeviceGenericState;
  /**
   * Singleton object corresponding to the entry with value ``128``.
   */
  static ExpansionBase: OcaDeviceGenericState;

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

export type IOcaDeviceGenericState =
  | OcaDeviceGenericState
  | 'NormalOperation'
  | 'Initializaing'
  | 'Updating'
  | 'Fault'
  | 'ExpansionBase'
  | 0
  | 1
  | 2
  | 3
  | 128;
