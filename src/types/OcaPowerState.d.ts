/*
 * This file has been generated.
 */
/**
 * Enumeration defining the power states that OCA devices can be in. The state is returned by the device's Power Manager on request.
 * @class OcaPowerState
 */
export class OcaPowerState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaPowerState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Working: OcaPowerState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Standby: OcaPowerState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Off: OcaPowerState;

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

export type IOcaPowerState =
  | OcaPowerState
  | 'None'
  | 'Working'
  | 'Standby'
  | 'Off'
  | 0
  | 1
  | 2
  | 3;
