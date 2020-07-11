/*
 * This file has been generated.
 */

/**
 * An absolute or relative PTP time. Format is standard PTP format: - 48
 * bit integer seconds - 32 bit integer nanoseconds PLUS a boolean sign
 * (positive=TRUE) field. Absolute times are always positive. Relative
 * times may be positive or negative.
 */
export class OcaTimePTP {
  constructor(Negative, Seconds, Nanoseconds) {
    /**
     * TRUE if and only if time value is negative. Absolute times are always
     * positive.
     * @member RemoteControlClasses.OcaTimePTP#OnNegativeChanged {PropertyEvent<int>} - This event is emitted when Negative changes in the remote object.
     */
    this.Negative = Negative;
    /**
     * 48 bits of seconds
     * @member RemoteControlClasses.OcaTimePTP#OnSecondsChanged {PropertyEvent<OcaPTPSeconds>} - This event is emitted when Seconds changes in the remote object.
     */
    this.Seconds = Seconds;
    /**
     * 32 bits of nano seconds
     * @member RemoteControlClasses.OcaTimePTP#OnNanosecondsChanged {PropertyEvent<number>} - This event is emitted when Nanoseconds changes in the remote object.
     */
    this.Nanoseconds = Nanoseconds;
  }
}
