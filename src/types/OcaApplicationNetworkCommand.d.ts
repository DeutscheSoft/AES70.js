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
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Pause: OcaApplicationNetworkCommand;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Stop: OcaApplicationNetworkCommand;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static Reset: OcaApplicationNetworkCommand;

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
  | 'Pause'
  | 'Stop'
  | 'Reset'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5;
