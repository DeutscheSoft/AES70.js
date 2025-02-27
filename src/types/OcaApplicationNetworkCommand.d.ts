/*
 * This file has been generated.
 */
/**
 * Command values for OcaMediaNetwork.Control().
 * @class OcaApplicationNetworkCommand
 */
export class OcaApplicationNetworkCommand {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaApplicationNetworkCommand;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Prepare: OcaApplicationNetworkCommand;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Start: OcaApplicationNetworkCommand;

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

export type IOcaApplicationNetworkCommand =
  | OcaApplicationNetworkCommand
  | 'None'
  | 'Prepare'
  | 'Start'
  | 0
  | 1
  | 2;
