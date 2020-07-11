/*
 * This file has been generated.
 */

/**
 * Historical statistics of the network.
 */
export class OcaNetworkStatistics {
  constructor(rxPacketErrors, txPacketErrors) {
    /**
     * The number of receiver packet errors.
     * @member RemoteControlClasses.OcaNetworkStatistics#OnrxPacketErrorsChanged {PropertyEvent<number>} - This event is emitted when rxPacketErrors changes in the remote object.
     */
    this.rxPacketErrors = rxPacketErrors;
    /**
     * The number of transmitter packet errors.
     * @member RemoteControlClasses.OcaNetworkStatistics#OntxPacketErrorsChanged {PropertyEvent<number>} - This event is emitted when txPacketErrors changes in the remote object.
     */
    this.txPacketErrors = txPacketErrors;
  }
}
