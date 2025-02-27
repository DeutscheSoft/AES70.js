/*
 * This file has been generated.
 */

export class OcaMediaTransportTimingParameters {
  /**
   * Media transport application's transport timing parameters
   * @class OcaMediaTransportTimingParameters
   */
  constructor(
    MinReceiveBufferCapacity,
    MaxReceiveBufferCapacity,
    TransmissionTimeVariation
  ) {
    /**
     * Minimum receive buffer capacity in floating-point seconds
     * @type number
     */
    this.MinReceiveBufferCapacity = MinReceiveBufferCapacity;
    /**
     * Maximum receive buffer capacity in floating-point seconds
     * @type number
     */
    this.MaxReceiveBufferCapacity = MaxReceiveBufferCapacity;
    /**
     * Transmission time variation in floating-point seconds
     * @type number
     */
    this.TransmissionTimeVariation = TransmissionTimeVariation;
  }
}
