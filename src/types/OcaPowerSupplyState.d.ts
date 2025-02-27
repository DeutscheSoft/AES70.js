/*
 * This file has been generated.
 */
/**
 * State of a power supply.
 * @class OcaPowerSupplyState
 */
export class OcaPowerSupplyState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Off: OcaPowerSupplyState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Unavailable: OcaPowerSupplyState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Available: OcaPowerSupplyState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Active: OcaPowerSupplyState;

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

export type IOcaPowerSupplyState =
  | OcaPowerSupplyState
  | 'Off'
  | 'Unavailable'
  | 'Available'
  | 'Active'
  | 0
  | 1
  | 2
  | 3;
