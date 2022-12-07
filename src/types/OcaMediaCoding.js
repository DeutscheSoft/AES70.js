/*
 * This file has been generated.
 */

export class OcaMediaCoding {
  /**
   * Codec ID + Coding parameters
   * @class OcaMediaCoding
   */
  constructor(CodingSchemeID, CodecParameters, ClockONo) {
    /**
     * ID of coding scheme to use.
     * @type number
     */
    this.CodingSchemeID = CodingSchemeID;
    /**
     * Coding parameters. Content is coding-scheme-dependent.
     * @type string
     */
    this.CodecParameters = CodecParameters;
    /**
     * Object number of OcaMediaClock3 object to use for this coding scheme. May
     * be zero if no OcaMediaClock3 object is used.
     * @type number
     */
    this.ClockONo = ClockONo;
  }
}
