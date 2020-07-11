/*
 * This file has been generated.
 */

/**
 * Multifield descriptor for a pilot tone detector element.
 */
export class OcaPilotToneDetectorSpec {
  constructor(Threshold, Frequency, PollInterval) {
    /**
     * Tone level threshold in dB.
     * @member RemoteControlClasses.OcaPilotToneDetectorSpec#OnThresholdChanged {PropertyEvent<OcaDBr>} - This event is emitted when Threshold changes in the remote object.
     */
    this.Threshold = Threshold;
    /**
     * Frequency of the measured tone (in Hz).
     * @member RemoteControlClasses.OcaPilotToneDetectorSpec#OnFrequencyChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency changes in the remote object.
     */
    this.Frequency = Frequency;
    /**
     * Poll interval in milliseconds.
     * @member RemoteControlClasses.OcaPilotToneDetectorSpec#OnPollIntervalChanged {PropertyEvent<OcaPeriod>} - This event is emitted when PollInterval changes in the remote object.
     */
    this.PollInterval = PollInterval;
  }
}
