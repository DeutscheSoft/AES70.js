/*
 * This file has been generated.
 */
/**
 * States of **OcaTaskScheduler** object. State values shall change when the
 * object receives a Command or when processing events (e.g. completion) occur.
 * @class OcaTaskSchedulerState
 */
export class OcaTaskSchedulerState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Unknown: OcaTaskSchedulerState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Running: OcaTaskSchedulerState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Paused: OcaTaskSchedulerState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Draining: OcaTaskSchedulerState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Stopped: OcaTaskSchedulerState;

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

export type IOcaTaskSchedulerState =
  | OcaTaskSchedulerState
  | 'Unknown'
  | 'Running'
  | 'Paused'
  | 'Draining'
  | 'Stopped'
  | 0
  | 1
  | 2
  | 3
  | 4;
