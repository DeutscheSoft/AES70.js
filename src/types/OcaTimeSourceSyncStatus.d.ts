/*
 * This file has been generated.
 */
/**
 * Synchronization statuses.
 * @class OcaTimeSourceSyncStatus
 */
export class OcaTimeSourceSyncStatus {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaTimeSourceSyncStatus;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Unsynchronized: OcaTimeSourceSyncStatus;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Synchronizing: OcaTimeSourceSyncStatus;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Synchronized: OcaTimeSourceSyncStatus;

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

export type IOcaTimeSourceSyncStatus =
  | OcaTimeSourceSyncStatus
  | 'Undefined'
  | 'Unsynchronized'
  | 'Synchronizing'
  | 'Synchronized'
  | 0
  | 1
  | 2
  | 3;
