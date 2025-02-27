/*
 * This file has been generated.
 */

export declare interface IOcaIP4Gateway {
  /**
   * Prefix of destinations to which this gateway provides access.
   * @type string
   */
  DestinationPrefix: string;

  /**
   * Address of this gateway
   * @type string
   */
  GatewayAddress: string;

  /**
   * Cost of using this gateway. 0=lowest.
   * @type number
   */
  Metric: number;
}

export declare class OcaIP4Gateway implements IOcaIP4Gateway {
  /**
   * Descriptor of an IPV4 gateway
   * @class OcaIP4Gateway
   */
  constructor(
    DestinationPrefix: string,
    GatewayAddress: string,
    Metric: number
  );

  /**
   * Prefix of destinations to which this gateway provides access.
   * @type string
   */
  DestinationPrefix: string;

  /**
   * Address of this gateway
   * @type string
   */
  GatewayAddress: string;

  /**
   * Cost of using this gateway. 0=lowest.
   * @type number
   */
  Metric: number;
}
