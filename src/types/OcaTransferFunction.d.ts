/*
 * This file has been generated.
 */

export declare interface IOcaTransferFunction {
  /**
   * Frequencies
   * @type number[]
   */
  Frequency: number[];

  /**
   * Amplitude (not in dB)
   * @type number[]
   */
  Amplitude: number[];

  /**
   * Phase in radians.
   * @type number[]
   */
  Phase: number[];
}

export declare class OcaTransferFunction implements IOcaTransferFunction {
  /**
   * A complex (i.e. magnitude + phase) transfer function.
   * @class OcaTransferFunction
   */
  constructor(Frequency: number[], Amplitude: number[], Phase: number[]);

  /**
   * Frequencies
   * @type number[]
   */
  Frequency: number[];

  /**
   * Amplitude (not in dB)
   * @type number[]
   */
  Amplitude: number[];

  /**
   * Phase in radians.
   * @type number[]
   */
  Phase: number[];
}
