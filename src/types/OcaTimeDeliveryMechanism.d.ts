/*
 * This file has been generated.
 */
/**
 * Types of time delivery mechanisms. See [RFC 7273] for a detailed discussion
 * of time sources , particularly sections 4.4-4.8. See the various time
 * delivery method specifications (e.g. [IEEE-1588] (PTP) [RFC 5905] (NTP)
 * [AES11] for more details.
 * @class OcaTimeDeliveryMechanism
 */
export class OcaTimeDeliveryMechanism {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static Local: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static Private: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static NTP: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static SNTP: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static IEEE1588_2002: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static IEEE1588_2008: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static IEEE1588_2019: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``8``.
   */
  static IEEE8021AS: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``9``.
   */
  static StreamEndpoint: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``11``.
   */
  static AES11: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``12``.
   */
  static TerrestrialRadio: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``13``.
   */
  static GPS: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``14``.
   */
  static Galileo: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``15``.
   */
  static GLONASS: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``16``.
   */
  static Beidou: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``17``.
   */
  static INRSS: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``128``.
   */
  static ExpansionBase: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static None: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static IEEE1588v1: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``6``.
   */
  static IEEE1588v2: OcaTimeDeliveryMechanism;
  /**
   * Singleton object corresponding to the entry with value ``7``.
   */
  static IEEE1588v2_1: OcaTimeDeliveryMechanism;

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

export type IOcaTimeDeliveryMechanism =
  | OcaTimeDeliveryMechanism
  | 'Undefined'
  | 'Local'
  | 'Private'
  | 'NTP'
  | 'SNTP'
  | 'IEEE1588_2002'
  | 'IEEE1588_2008'
  | 'IEEE1588_2019'
  | 'IEEE8021AS'
  | 'StreamEndpoint'
  | 'AES11'
  | 'TerrestrialRadio'
  | 'GPS'
  | 'Galileo'
  | 'GLONASS'
  | 'Beidou'
  | 'INRSS'
  | 'ExpansionBase'
  | 'None'
  | 'IEEE1588v1'
  | 'IEEE1588v2'
  | 'IEEE1588v2_1'
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
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 128
  | 1
  | 5
  | 6
  | 7;
