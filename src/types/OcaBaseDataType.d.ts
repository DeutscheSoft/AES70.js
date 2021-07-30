/*
 * This file has been generated.
 */
/**
 * Enum that describes all available base datatypes.
 * @class OcaBaseDataType
 */
export class OcaBaseDataType {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static OcaBoolean: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static OcaInt8: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static OcaInt16: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static OcaInt32: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static OcaInt64: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static OcaUint8: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static OcaUint16: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static OcaUint32: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``9``.
   */
  static OcaUint64: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``10``.
   */
  static OcaFloat32: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``11``.
   */
  static OcaFloat64: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``12``.
   */
  static OcaString: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``13``.
   */
  static OcaBitstring: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``14``.
   */
  static OcaBlob: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``15``.
   */
  static OcaBlobFixedLen: OcaBaseDataType;
  /**
   * Singleton object corresponding to the entry with value ``16``.
   */
  static OcaBit: OcaBaseDataType;

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

export type IOcaBaseDataType =
  | OcaBaseDataType
  | 'None'
  | 'OcaBoolean'
  | 'OcaInt8'
  | 'OcaInt16'
  | 'OcaInt32'
  | 'OcaInt64'
  | 'OcaUint8'
  | 'OcaUint16'
  | 'OcaUint32'
  | 'OcaUint64'
  | 'OcaFloat32'
  | 'OcaFloat64'
  | 'OcaString'
  | 'OcaBitstring'
  | 'OcaBlob'
  | 'OcaBlobFixedLen'
  | 'OcaBit'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16;
