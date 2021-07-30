/*
 * This file has been generated.
 */
/**
 * Network states.
 * @class OcaApplicationNetworkState
 */
export class OcaApplicationNetworkState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Unknown: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static NotReady: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Readying: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Ready: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Running: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Paused: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static Stopping: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static Stopped: OcaApplicationNetworkState;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static Fault: OcaApplicationNetworkState;

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

export type IOcaApplicationNetworkState =
  | OcaApplicationNetworkState
  | 'Unknown'
  | 'NotReady'
  | 'Readying'
  | 'Ready'
  | 'Running'
  | 'Paused'
  | 'Stopping'
  | 'Stopped'
  | 'Fault'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;
