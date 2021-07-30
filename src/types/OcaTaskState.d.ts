/*
 * This file has been generated.
 */
/**
 * States of OcaTask object. State values change as a result of the object's having received a comment or encountering processing events (e.g. completion).
 * @class OcaTaskState
 */
export class OcaTaskState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static NotPrepared: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Disabled: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Enabled: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Running: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Completed: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static Failed: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static Stopped: OcaTaskState;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static Aborted: OcaTaskState;

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

export type IOcaTaskState =
  | OcaTaskState
  | 'None'
  | 'NotPrepared'
  | 'Disabled'
  | 'Enabled'
  | 'Running'
  | 'Completed'
  | 'Failed'
  | 'Stopped'
  | 'Aborted'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;
