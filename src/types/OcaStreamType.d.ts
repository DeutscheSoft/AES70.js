/*
 * This file has been generated.
 */
/**
 * Type of media endpoint: unicast or multicast.
 * @class OcaStreamType
 */
export class OcaStreamType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaStreamType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Unicast: OcaStreamType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Multicast: OcaStreamType;

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

export type IOcaStreamType =
  | OcaStreamType
  | 'None'
  | 'Unicast'
  | 'Multicast'
  | 0
  | 1
  | 2;
