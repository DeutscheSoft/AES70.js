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
     * @type number[]
     */
    this.Frequency = Frequency;
    /**
     * Amplitude (not in dB)
     * @type number[]
     */
    this.Amplitude = Amplitude;
    /**
     * Phase in radians.
     * @type number[]
     */
    this.Phase = Phase;
  }
}
