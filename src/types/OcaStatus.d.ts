/*
 * This file has been generated.
 */
/**
 * Standard status codes returned from method calls.
 * @class OcaStatus
 */
export class OcaStatus {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static OK: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static ProtocolVersionError: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static DeviceError: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Locked: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static BadFormat: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static BadONo: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static ParameterError: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static ParameterOutOfRange: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static NotImplemented: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``9``.
   */
  static InvalidRequest: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``10``.
   */
  static ProcessingFailed: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``11``.
   */
  static BadMethod: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``12``.
   */
  static PartiallySucceeded: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``13``.
   */
  static Timeout: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``14``.
   */
  static BufferOverflow: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``15``.
   */
  static PermissionDenied: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``16``.
   */
  static OutOfMemory: OcaStatus;
  /**
   * Singleton object corresponding to the entry with value ``17``.
   */
  static Busy: OcaStatus;

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

export type IOcaStatus =
  | OcaStatus
  | 'OK'
  | 'ProtocolVersionError'
  | 'DeviceError'
  | 'Locked'
  | 'BadFormat'
  | 'BadONo'
  | 'ParameterError'
  | 'ParameterOutOfRange'
  | 'NotImplemented'
  | 'InvalidRequest'
  | 'ProcessingFailed'
  | 'BadMethod'
  | 'PartiallySucceeded'
  | 'Timeout'
  | 'BufferOverflow'
  | 'PermissionDenied'
  | 'OutOfMemory'
  | 'Busy'
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
  | 16
  | 17;
