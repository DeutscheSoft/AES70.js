/*
 * This file has been generated.
 */
/**
 * Lock states of media clocks.
 * @class OcaMediaClockLockState
 */
export class OcaMediaClockLockState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaMediaClockLockState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Locked: OcaMediaClockLockState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Synchronizing: OcaMediaClockLockState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static FreeRun: OcaMediaClockLockState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Stopped: OcaMediaClockLockState;

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

export type IOcaMediaClockLockState =
  | OcaMediaClockLockState
  | 'Undefined'
  | 'Locked'
  | 'Synchronizing'
  | 'FreeRun'
  | 'Stopped'
  | 0
  | 1
  | 2
  | 3
  | 4;
