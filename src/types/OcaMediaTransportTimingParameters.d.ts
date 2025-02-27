/*
 * This file has been generated.
 */

export declare interface IOcaMediaTransportTimingParameters {
  /**
   * Minimum receive buffer capacity in floating-point seconds
   * @type number
   */
  MinReceiveBufferCapacity: number;

  /**
   * Maximum receive buffer capacity in floating-point seconds
   * @type number
   */
  MaxReceiveBufferCapacity: number;

  /**
   * Transmission time variation in floating-point seconds
   * @type number
   */
  TransmissionTimeVariation: number;
}

export declare class OcaMediaTransportTimingParameters
  implements IOcaMediaTransportTimingParameters {
  /**
   * Media transport application's transport timing parameters
   * @class OcaMediaTransportTimingParameters
   */
  constructor(
    MinReceiveBufferCapacity: number,
    MaxReceiveBufferCapacity: number,
    TransmissionTimeVariation: number
  );

  /**
   * Minimum receive buffer capacity in floating-point seconds
   * @type number
   */
  MinReceiveBufferCapacity: number;

  /**
   * Maximum receive buffer capacity in floating-point seconds
   * @type number
   */
  MaxReceiveBufferCapacity: number;

  /**
   * Transmission time variation in floating-point seconds
   * @type number
   */
  TransmissionTimeVariation: number;
}
