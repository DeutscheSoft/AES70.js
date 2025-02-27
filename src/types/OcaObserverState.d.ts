/*
 * This file has been generated.
 */
/**
 * State of observer
 * @class OcaObserverState
 */
export class OcaObserverState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NotTriggered: OcaObserverState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Triggered: OcaObserverState;

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

export type IOcaObserverState =
  | OcaObserverState
  | 'NotTriggered'
  | 'Triggered'
  | 0
  | 1;
