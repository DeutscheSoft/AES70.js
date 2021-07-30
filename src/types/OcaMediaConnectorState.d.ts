/*
 * This file has been generated.
 */
/**
 * Status options for a stream connector.
 * @class OcaMediaConnectorState
 */
export class OcaMediaConnectorState {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Stopped: OcaMediaConnectorState;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static SettingUp: OcaMediaConnectorState;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Running: OcaMediaConnectorState;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Paused: OcaMediaConnectorState;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Fault: OcaMediaConnectorState;

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

export type IOcaMediaConnectorState =
  | OcaMediaConnectorState
  | 'Stopped'
  | 'SettingUp'
  | 'Running'
  | 'Paused'
  | 'Fault'
  | 0
  | 1
  | 2
  | 3
  | 4;
