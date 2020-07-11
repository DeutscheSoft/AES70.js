/*
 * This file has been generated.
 */

/**
 * Codec ID + Coding parameters
 */
export class OcaMediaCoding {
  constructor(CodingSchemeID, CodecParameters, ClockONo) {
    /**
     * ID of coding scheme to use.
     * @member RemoteControlClasses.OcaMediaCoding#OnCodingSchemeIDChanged {PropertyEvent<OcaMediaCodingSchemeID>} - This event is emitted when CodingSchemeID changes in the remote object.
     */
    this.CodingSchemeID = CodingSchemeID;
    /**
     * Coding parameters. Content is coding-scheme-dependent.
     * @member RemoteControlClasses.OcaMediaCoding#OnCodecParametersChanged {PropertyEvent<string>} - This event is emitted when CodecParameters changes in the remote object.
     */
    this.CodecParameters = CodecParameters;
    /**
     * Object number of OcaMediaClock3 object to use for this coding scheme.
     * May be zero if no OcaMediaClock3 object is used.
     * @member RemoteControlClasses.OcaMediaCoding#OnClockONoChanged {PropertyEvent<OcaONo>} - This event is emitted when ClockONo changes in the remote object.
     */
    this.ClockONo = ClockONo;
  }
}
