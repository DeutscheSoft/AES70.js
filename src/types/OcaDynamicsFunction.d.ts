/*
 * This file has been generated.
 */
/**
 * Enumeration of the types of dynamics functions available from class
 * OcaDynamics.
 * @class OcaDynamicsFunction
 */
export class OcaDynamicsFunction {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaDynamicsFunction;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Compress: OcaDynamicsFunction;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Limit: OcaDynamicsFunction;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Expand: OcaDynamicsFunction;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Gate: OcaDynamicsFunction;

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

export type IOcaDynamicsFunction =
  | OcaDynamicsFunction
  | 'None'
  | 'Compress'
  | 'Limit'
  | 'Expand'
  | 'Gate'
  | 0
  | 1
  | 2
  | 3
  | 4;
