/*
 * This file has been generated.
 */
/**
 * Status options for a stream.
 * @class OcaNetworkSignalChannelStatus
 */
export class OcaNetworkSignalChannelStatus {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static NotConnected: OcaNetworkSignalChannelStatus;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Connected: OcaNetworkSignalChannelStatus;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Muted: OcaNetworkSignalChannelStatus;

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

export type IOcaNetworkSignalChannelStatus =
  | OcaNetworkSignalChannelStatus
  | 'NotConnected'
  | 'Connected'
  | 'Muted'
  | 0
  | 1
  | 2;
