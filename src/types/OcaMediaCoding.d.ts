/*
 * This file has been generated.
 */

export declare interface IOcaMediaCoding {
  /**
   * ID of coding scheme to use.
   * @type number
   */
  CodingSchemeID: number;

  /**
   * Coding parameters. Content is coding-scheme-dependent.
   * @type string
   */
  CodecParameters: string;

  /**
   * Object number of OcaMediaClock3 object to use for this coding scheme. May be zero if no OcaMediaClock3 object is used.
   * @type number
   */
  ClockONo: number;
}

export declare class OcaMediaCoding implements IOcaMediaCoding {
  /**
   * Codec ID + Coding parameters
   * @class OcaMediaCoding
   */
  constructor(
    CodingSchemeID: number,
    CodecParameters: string,
    ClockONo: number
  );

  /**
   * ID of coding scheme to use.
   * @type number
   */
  CodingSchemeID: number;

  /**
   * Coding parameters. Content is coding-scheme-dependent.
   * @type string
   */
  CodecParameters: string;

  /**
   * Object number of OcaMediaClock3 object to use for this coding scheme. May be zero if no OcaMediaClock3 object is used.
   * @type number
   */
  ClockONo: number;
}
