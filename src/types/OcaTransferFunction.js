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
     * @type Array
     */
    this.Frequency = Frequency;
    /**
     * Amplitude (not in dB)
     * @type Array
     */
    this.Amplitude = Amplitude;
    /**
     * Phase in radians.
     * @type Array
     */
    this.Phase = Phase;
  }
}
