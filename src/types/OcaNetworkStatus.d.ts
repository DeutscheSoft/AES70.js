/*
 * This file has been generated.
 */
/**
 * Network status enum.
 * @class OcaNetworkStatus
 */
export class OcaNetworkStatus {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Unknown: OcaNetworkStatus;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Ready: OcaNetworkStatus;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static StartingUp: OcaNetworkStatus;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Stopped: OcaNetworkStatus;

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

export type IOcaNetworkStatus =
  | OcaNetworkStatus
  | 'Unknown'
  | 'Ready'
  | 'StartingUp'
  | 'Stopped'
  | 0
  | 1
  | 2
  | 3;
