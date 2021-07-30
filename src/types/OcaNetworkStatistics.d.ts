/*
 * This file has been generated.
 */

export declare interface IOcaNetworkStatistics {
  /**
   * The number of receiver packet errors.
   * @type number
   */
  rxPacketErrors: number;

  /**
   * The number of transmitter packet errors.
   * @type number
   */
  txPacketErrors: number;
}

export declare class OcaNetworkStatistics implements IOcaNetworkStatistics {
  /**
   * Historical statistics of the network.
   * @class OcaNetworkStatistics
   */
  constructor(rxPacketErrors: number, txPacketErrors: number);

  /**
   * The number of receiver packet errors.
   * @type number
   */
  rxPacketErrors: number;

  /**
   * The number of transmitter packet errors.
   * @type number
   */
  txPacketErrors: number;
}
