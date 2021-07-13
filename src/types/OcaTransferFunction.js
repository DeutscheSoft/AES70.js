/*
 * This file has been generated.
 */

export class OcaTransferFunction {
  /**
   * A complex (i.e. magnitude + phase) transfer function.
   * @class OcaTransferFunction
   */
  constructor(Frequency, Amplitude, Phase) {
    /**
     * Frequencies
     * @type array
     */
    this.Frequency = Frequency;
    /**
     * Amplitude (not in dB)
     * @type array
     */
    this.Amplitude = Amplitude;
    /**
     * Phase in radians.
     * @type array
     */
    this.Phase = Phase;
  }
}
