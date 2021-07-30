/*
 * This file has been generated.
 */
/**
 * Type of media endpoint: unicast or multicast.
 * @class OcaMediaStreamCastMode
 */
export class OcaMediaStreamCastMode {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaMediaStreamCastMode;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Unicast: OcaMediaStreamCastMode;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Multicast: OcaMediaStreamCastMode;

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

export type IOcaMediaStreamCastMode =
  | OcaMediaStreamCastMode
  | 'None'
  | 'Unicast'
  | 'Multicast'
  | 0
  | 1
  | 2;
