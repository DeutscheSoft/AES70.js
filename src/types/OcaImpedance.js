/*
 * This file has been generated.
 */

/**
 * Complex impedance. Expressed as a magnitude and phase.
 */
export class OcaImpedance {
  constructor(Magnitude, Phase) {
    /**
     * Impedance magnitude in ohms.
     * @member RemoteControlClasses.OcaImpedance#OnMagnitudeChanged {PropertyEvent<float>} - This event is emitted when Magnitude changes in the remote object.
     */
    this.Magnitude = Magnitude;
    /**
     * Impedance phase in radians.
     * @member RemoteControlClasses.OcaImpedance#OnPhaseChanged {PropertyEvent<float>} - This event is emitted when Phase changes in the remote object.
     */
    this.Phase = Phase;
  }
}
