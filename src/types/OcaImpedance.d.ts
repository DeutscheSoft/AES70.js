/*
 * This file has been generated.
 */

export declare interface IOcaImpedance {
  /**
   * Impedance magnitude in ohms.
   * @type number
   */
  Magnitude: number;

  /**
   * Impedance phase in radians.
   * @type number
   */
  Phase: number;
}

export declare class OcaImpedance implements IOcaImpedance {
  /**
   * Complex impedance. Expressed as a magnitude and phase.
   * @class OcaImpedance
   */
  constructor(Magnitude: number, Phase: number);

  /**
   * Impedance magnitude in ohms.
   * @type number
   */
  Magnitude: number;

  /**
   * Impedance phase in radians.
   * @type number
   */
  Phase: number;
}
