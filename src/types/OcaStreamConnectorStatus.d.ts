/*
 * This file has been generated.
 */
/**
 * Status options for a stream connector.
 * @class OcaStreamConnectorStatus
 */
export class OcaStreamConnectorStatus {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NotAvailable: OcaStreamConnectorStatus;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Idle: OcaStreamConnectorStatus;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Connected: OcaStreamConnectorStatus;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Paused: OcaStreamConnectorStatus;

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

export type IOcaStreamConnectorStatus =
  | OcaStreamConnectorStatus
  | 'NotAvailable'
  | 'Idle'
  | 'Connected'
  | 'Paused'
  | 0
  | 1
  | 2
  | 3;
