/*
 * This file has been generated.
 */

export declare interface IOcaIP6Gateway {
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

export declare class OcaIP6Gateway implements IOcaIP6Gateway {
  /**
   * Descriptor of an IPV6 gateway
   * @class OcaIP6Gateway
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
