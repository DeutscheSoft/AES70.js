/*
 * This file has been generated.
 */

export class OcaIP4Gateway {
  /**
   * Descriptor of an IPV4 gateway
   * @class OcaIP4Gateway
   */
  constructor(DestinationPrefix, GatewayAddress, Metric) {
    /**
     * Prefix of destinations to which this gateway provides access.
     * @type string
     */
    this.DestinationPrefix = DestinationPrefix;
    /**
     * Address of this gateway
     * @type string
     */
    this.GatewayAddress = GatewayAddress;
    /**
     * Cost of using this gateway. 0=lowest.
     * @type number
     */
    this.Metric = Metric;
  }
}
