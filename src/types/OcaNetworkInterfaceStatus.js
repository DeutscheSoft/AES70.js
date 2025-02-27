/*
 * This file has been generated.
 */

export class OcaNetworkInterfaceStatus {
  /**
   * Network-type-specific network interface status.
   * @class OcaNetworkInterfaceStatus
   */
  constructor(State, AdaptationData) {
    /**
     * Generic state of the network interface
     * @type OcaNetworkInterfaceState
     */
    this.State = State;
    /**
     * Adaptation-dependent state data
     * @type Uint8Array
     */
    this.AdaptationData = AdaptationData;
  }
}
