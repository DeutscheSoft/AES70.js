/*
 * This file has been generated.
 */

export class OcaPilotToneDetectorSpec {
  /**
   * Multifield descriptor for a pilot tone detector element.
   * @class OcaPilotToneDetectorSpec
   */
  constructor(Threshold, Frequency, PollInterval) {
    /**
     * Tone level threshold in dB.
     * @type OcaDBr
     */
    this.Threshold = Threshold;
    /**
     * Frequency of the measured tone (in Hz).
     * @type number
     */
    this.Frequency = Frequency;
    /**
     * Poll interval in milliseconds.
     * @type number
     */
    this.PollInterval = PollInterval;
  }
}
