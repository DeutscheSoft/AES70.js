/*
 * This file has been generated.
 */
/**
 * State of a session
 * @class OcaMediaTransportSessionState
 */
export class OcaMediaTransportSessionState {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Unconfigured: OcaMediaTransportSessionState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Configured: OcaMediaTransportSessionState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static ConnectedNotStreaming: OcaMediaTransportSessionState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static ConnectedStreaming: OcaMediaTransportSessionState;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Error: OcaMediaTransportSessionState;

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

export type IOcaMediaTransportSessionState =
  | OcaMediaTransportSessionState
  | 'Unconfigured'
  | 'Configured'
  | 'ConnectedNotStreaming'
  | 'ConnectedStreaming'
  | 'Error'
  | 1
  | 2
  | 3
  | 4
  | 5;
