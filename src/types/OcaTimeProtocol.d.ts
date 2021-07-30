/*
 * This file has been generated.
 */
/**
 * Types of time sources. See RFC7273 particularly sections 4.4-4.8 .
 * @class OcaTimeProtocol
 */
export class OcaTimeProtocol {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static None: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Private: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static NTP: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static SNTP: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static IEEE1588_2002: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static IEEE1588_2008: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static IEEE_AVB: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static AES11: OcaTimeProtocol;
  /**
   * Singleton object corresponding to the entry with value ``9``.
   */
  static Genlock: OcaTimeProtocol;

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

export type IOcaTimeProtocol =
  | OcaTimeProtocol
  | 'Undefined'
  | 'None'
  | 'Private'
  | 'NTP'
  | 'SNTP'
  | 'IEEE1588_2002'
  | 'IEEE1588_2008'
  | 'IEEE_AVB'
  | 'AES11'
  | 'Genlock'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9;
