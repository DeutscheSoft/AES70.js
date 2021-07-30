/*
 * This file has been generated.
 */
/**
 * Commands controllers can send to OcaTasks to change their states
 * @class OcaTaskCommand
 */
export class OcaTaskCommand {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Prepare: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Enable: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Start: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Stop: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Abort: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static Disable: OcaTaskCommand;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static Clear: OcaTaskCommand;

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

export type IOcaTaskCommand =
  | OcaTaskCommand
  | 'None'
  | 'Prepare'
  | 'Enable'
  | 'Start'
  | 'Stop'
  | 'Abort'
  | 'Disable'
  | 'Clear'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;
