/*
 * This file has been generated.
 */
/**
 * Status options for a stream.
 * @class OcaStreamStatus
 */
export class OcaStreamStatus {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NotConnected: OcaStreamStatus;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Connected: OcaStreamStatus;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Paused: OcaStreamStatus;

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

export type IOcaStreamStatus =
  | OcaStreamStatus
  | 'NotConnected'
  | 'Connected'
  | 'Paused'
  | 0
  | 1
  | 2;
