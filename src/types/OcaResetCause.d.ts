/*
 * This file has been generated.
 */
/**
 * Enumeration of reasons for device reset.
 * @class OcaResetCause
 */
export class OcaResetCause {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static PowerOn: OcaResetCause;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static InternalError: OcaResetCause;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Upgrade: OcaResetCause;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static ExternalRequest: OcaResetCause;
  /**
   * Singleton object corresponding to the entry with value ``255``.
   */
  static Unknown: OcaResetCause;

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

export type IOcaResetCause =
  | OcaResetCause
  | 'PowerOn'
  | 'InternalError'
  | 'Upgrade'
  | 'ExternalRequest'
  | 'Unknown'
  | 0
  | 1
  | 2
  | 3
  | 255;
