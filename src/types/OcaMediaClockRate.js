/*
 * This file has been generated.
 */

/**
 * Media clock nominal rate and associated parameters.
 */
export class OcaMediaClockRate {
  constructor(NominalRate, PullRange, Accuracy, JitterMax) {
    /**
     * Nominal clock rate, in hertz.
     * @member RemoteControlClasses.OcaMediaClockRate#OnNominalRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when NominalRate changes in the remote object.
     */
    this.NominalRate = NominalRate;
    /**
     * Pull range in hertz. Not all clock types will specify this. Use IEEE
     * NaN for unspecified value (OcaFrequency is IEEE floating-point).
     * @member RemoteControlClasses.OcaMediaClockRate#OnPullRangeChanged {PropertyEvent<OcaFrequency>} - This event is emitted when PullRange changes in the remote object.
     */
    this.PullRange = PullRange;
    /**
     * Accuracy in ppm. Not all clock types will specify this. Use IEEE NaN
     * for unspecified value.
     * @member RemoteControlClasses.OcaMediaClockRate#OnAccuracyChanged {PropertyEvent<float>} - This event is emitted when Accuracy changes in the remote object.
     */
    this.Accuracy = Accuracy;
    /**
     * Maximum jitter in ppm. Not all clock types will specify this. Use IEEE
     * NaN for unspecified value.
     * @member RemoteControlClasses.OcaMediaClockRate#OnJitterMaxChanged {PropertyEvent<float>} - This event is emitted when JitterMax changes in the remote object.
     */
    this.JitterMax = JitterMax;
  }
}
