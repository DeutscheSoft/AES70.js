/*
 * This file has been generated.
 */
/**
 * Command values for **OcaNetworkInterface.ApplyCommand().**
 * @class OcaNetworkInterfaceCommand
 */
export class OcaNetworkInterfaceCommand {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Start: OcaNetworkInterfaceCommand;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Stop: OcaNetworkInterfaceCommand;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Restart: OcaNetworkInterfaceCommand;

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

export type IOcaNetworkInterfaceCommand =
  | OcaNetworkInterfaceCommand
  | 'Start'
  | 'Stop'
  | 'Restart'
  | 0
  | 1
  | 2;
