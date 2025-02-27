/*
 * This file has been generated.
 */
/**
 * Lock state of object
 * @class OcaLockState
 */
export class OcaLockState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NoLock: OcaLockState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static LockNoWrite: OcaLockState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static LockNoReadWrite: OcaLockState;

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

export type IOcaLockState =
  | OcaLockState
  | 'NoLock'
  | 'LockNoWrite'
  | 'LockNoReadWrite'
  | 0
  | 1
  | 2;
