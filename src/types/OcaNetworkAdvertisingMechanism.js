/*
 * This file has been generated.
 */

export class OcaNetworkAdvertisingMechanism {
  /**
   * Descriptor of a Network Advertising mechanism specified by a Network
   * Assignment.
   * @class OcaNetworkAdvertisingMechanism
   */
  constructor(Service, Parameters) {
    /**
     * Advertising service used
     * @type OcaNetworkAdvertisingService
     */
    this.Service = Service;
    /**
     * Advertising parameters. Content depends on advertising service used.
     * @type string
     */
    this.Parameters = Parameters;
  }
}
