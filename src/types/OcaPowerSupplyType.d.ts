/*
 * This file has been generated.
 */
/**
 * Type of power supply.
 * @class OcaPowerSupplyType
 */
export class OcaPowerSupplyType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaPowerSupplyType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Mains: OcaPowerSupplyType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Battery: OcaPowerSupplyType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Phantom: OcaPowerSupplyType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Solar: OcaPowerSupplyType;

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

export type IOcaPowerSupplyType =
  | OcaPowerSupplyType
  | 'None'
  | 'Mains'
  | 'Battery'
  | 'Phantom'
  | 'Solar'
  | 0
  | 1
  | 2
  | 3
  | 4;
