/*
 * This file has been generated.
 */
/**
 * Media transport protocols available.
 * @class OcaNetworkMediaProtocol
 */
export class OcaNetworkMediaProtocol {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static None: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static AV3: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static AVBTP: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static Dante: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static Cobranet: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static AES67: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static SMPTEAudio: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static LiveWire: OcaNetworkMediaProtocol;
  /**
   * Singleton object corresponding to the entry with value ``65``.
   */
  static ExtensionPoint: OcaNetworkMediaProtocol;

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

export type IOcaNetworkMediaProtocol =
  | OcaNetworkMediaProtocol
  | 'None'
  | 'AV3'
  | 'AVBTP'
  | 'Dante'
  | 'Cobranet'
  | 'AES67'
  | 'SMPTEAudio'
  | 'LiveWire'
  | 'ExtensionPoint'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 65;
