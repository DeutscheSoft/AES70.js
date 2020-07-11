/*
 * This file has been generated.
 */

/**
 * A complex (i.e. magnitude + phase) transfer function.
 */
export class OcaTransferFunction {
  constructor(Frequency, Amplitude, Phase) {
    /**
     * Frequencies
     * @member RemoteControlClasses.OcaTransferFunction#OnFrequencyChanged {PropertyEvent<array>} - This event is emitted when Frequency changes in the remote object.
     */
    this.Frequency = Frequency;
    /**
     * Amplitude (not in dB)
     * @member RemoteControlClasses.OcaTransferFunction#OnAmplitudeChanged {PropertyEvent<array>} - This event is emitted when Amplitude changes in the remote object.
     */
    this.Amplitude = Amplitude;
    /**
     * Phase in radians.
     * @member RemoteControlClasses.OcaTransferFunction#OnPhaseChanged {PropertyEvent<array>} - This event is emitted when Phase changes in the remote object.
     */
    this.Phase = Phase;
  }
}
