/*
 * This file has been generated.
 */

export class OcaNetworkStatistics {
  /**
   * Historical statistics of the network.
   * @class OcaNetworkStatistics
   */
  constructor(rxPacketErrors, txPacketErrors) {
    /**
     * The number of receiver packet errors.
     * @type number
     */
    this.rxPacketErrors = rxPacketErrors;
    /**
     * The number of transmitter packet errors.
     * @type number
     */
    this.txPacketErrors = txPacketErrors;
  }
}
