/*
 * This file has been generated.
 */
/**
 * Enum describing property change type.
 * @class OcaPropertyChangeType
 */
export class OcaPropertyChangeType {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static CurrentChanged: OcaPropertyChangeType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static MinChanged: OcaPropertyChangeType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static MaxChanged: OcaPropertyChangeType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static ItemAdded: OcaPropertyChangeType;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static ItemChanged: OcaPropertyChangeType;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static ItemDeleted: OcaPropertyChangeType;

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

export type IOcaPropertyChangeType =
  | OcaPropertyChangeType
  | 'CurrentChanged'
  | 'MinChanged'
  | 'MaxChanged'
  | 'ItemAdded'
  | 'ItemChanged'
  | 'ItemDeleted'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6;
