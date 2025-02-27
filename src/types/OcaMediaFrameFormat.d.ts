/*
 * This file has been generated.
 */
/**
 * Media stream frame formats.
 * @class OcaMediaFrameFormat
 */
export class OcaMediaFrameFormat {
  /**
   * Singleton object corresponding to the entry with value ``0``.
   */
  static Undefined: OcaMediaFrameFormat;
  /**
   * Singleton object corresponding to the entry with value ``1``.
   */
  static RTP: OcaMediaFrameFormat;
  /**
   * Singleton object corresponding to the entry with value ``2``.
   */
  static AAF: OcaMediaFrameFormat;
  /**
   * Singleton object corresponding to the entry with value ``3``.
   */
  static CRF_MILAN: OcaMediaFrameFormat;
  /**
   * Singleton object corresponding to the entry with value ``4``.
   */
  static IEC_61883_6: OcaMediaFrameFormat;
  /**
   * Singleton object corresponding to the entry with value ``5``.
   */
  static USB_AUDIO_2_0: OcaMediaFrameFormat;
  /**
   * Singleton object corresponding to the entry with value ``65``.
   */
  static ExtensionPoint: OcaMediaFrameFormat;

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

export type IOcaMediaFrameFormat =
  | OcaMediaFrameFormat
  | 'Undefined'
  | 'RTP'
  | 'AAF'
  | 'CRF_MILAN'
  | 'IEC_61883_6'
  | 'USB_AUDIO_2_0'
  | 'ExtensionPoint'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 65;
