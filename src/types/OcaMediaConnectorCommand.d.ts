/*
 * This file has been generated.
 */
/**
 * Command values for OcaMediaNetwork.ControlConnector(...)
 * @class OcaMediaConnectorCommand
 */
export class OcaMediaConnectorCommand {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaMediaConnectorCommand;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Start: OcaMediaConnectorCommand;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Pause: OcaMediaConnectorCommand;

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

export type IOcaMediaConnectorCommand =
  | OcaMediaConnectorCommand
  | 'None'
  | 'Start'
  | 'Pause'
  | 0
  | 1
  | 2;
