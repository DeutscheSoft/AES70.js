/*
 * This file has been generated.
 */
/**
 * Enumeration of presentation units that can be used in OCA classes. Property
 * values of OCA objects are always in SI units (unless explicitly documented
 * otherwise), but the presentation unit can also be stored to indicate in which
 * unit the value was presented in a user interface. This way another controller
 * can also present it in that unit (i.e. doing a conversion on the controller
 * before presenting it) to keep the user presentation uniform. Note that the
 * presentation unit may be equal to the unit of the property (in which case of
 * course no conversion is needed).
 * @class OcaPresentationUnit
 */
export class OcaPresentationUnit {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static dBu: OcaPresentationUnit;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static dBV: OcaPresentationUnit;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static V: OcaPresentationUnit;

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

export type IOcaPresentationUnit =
  | OcaPresentationUnit
  | 'dBu'
  | 'dBV'
  | 'V'
  | 0
  | 1
  | 2;
