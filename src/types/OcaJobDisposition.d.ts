/*
 * This file has been generated.
 */
/**
 * Types of run queue item disposition
 * @class OcaJobDisposition
 */
export class OcaJobDisposition {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static RunStarted: OcaJobDisposition;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static ItemDeleted: OcaJobDisposition;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static FailedToStart_TaskNotAvailable: OcaJobDisposition;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static FailedToStart_TaskNotCompatible: OcaJobDisposition;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static FailedToStart_ResourceUnavailable: OcaJobDisposition;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static FailedToStart_DeviceError: OcaJobDisposition;

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

export type IOcaJobDisposition =
  | OcaJobDisposition
  | 'RunStarted'
  | 'ItemDeleted'
  | 'FailedToStart_TaskNotAvailable'
  | 'FailedToStart_TaskNotCompatible'
  | 'FailedToStart_ResourceUnavailable'
  | 'FailedToStart_DeviceError'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;
