/*
 * This file has been generated.
 */
/**
 * Command repertoire of OcaRamper's  **Control** method.
 * @class OcaRamperCommand
 */
export class OcaRamperCommand {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Enable: OcaRamperCommand;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Start: OcaRamperCommand;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Halt: OcaRamperCommand;

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

export type IOcaRamperCommand =
  | OcaRamperCommand
  | 'Enable'
  | 'Start'
  | 'Halt'
  | 1
  | 2
  | 3;
