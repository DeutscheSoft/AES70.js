/*
 * This file has been generated.
 */
/**
 * States of OcaTask object. State values shall change as a result of the
 * object's having received a Command or encountering processing events (e.g.
 * completion).
 * @class OcaTaskGenericState
 */
export class OcaTaskGenericState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaTaskGenericState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Idle: OcaTaskGenericState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Ready: OcaTaskGenericState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Running: OcaTaskGenericState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Ended: OcaTaskGenericState;

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

export type IOcaTaskGenericState =
  | OcaTaskGenericState
  | 'None'
  | 'Idle'
  | 'Ready'
  | 'Running'
  | 'Ended'
  | 0
  | 1
  | 2
  | 3
  | 4;
