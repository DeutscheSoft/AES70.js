/*
 * This file has been generated.
 */
/**
 * Enum describing status change types, as used in **OcaGrouper's StatusChange**
 * event. **Deprecated** in AES70-2024.
 * @class OcaGrouperStatusChangeType
 */
export class OcaGrouperStatusChangeType {
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static citizenAdded: OcaGrouperStatusChangeType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static citizenDeleted: OcaGrouperStatusChangeType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static citizenConnectionLost: OcaGrouperStatusChangeType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static citizenConnectionReEstablished: OcaGrouperStatusChangeType;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static citizenError: OcaGrouperStatusChangeType;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static enrollment: OcaGrouperStatusChangeType;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static unEnrollment: OcaGrouperStatusChangeType;

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

export type IOcaGrouperStatusChangeType =
  | OcaGrouperStatusChangeType
  | 'citizenAdded'
  | 'citizenDeleted'
  | 'citizenConnectionLost'
  | 'citizenConnectionReEstablished'
  | 'citizenError'
  | 'enrollment'
  | 'unEnrollment'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7;
