/*
 * This file has been generated.
 */
import {
  IOcaNetworkInterfaceState,
  OcaNetworkInterfaceState,
} from './OcaNetworkInterfaceState';

export declare interface IOcaNetworkInterfaceStatus {
  /**
   * Generic state of the network interface
   * @type OcaNetworkInterfaceState
   */
  State: IOcaNetworkInterfaceState;

  /**
   * Adaptation-dependent state data
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;
}

export declare class OcaNetworkInterfaceStatus
  implements IOcaNetworkInterfaceStatus {
  /**
   * Network-type-specific network interface status.
   * @class OcaNetworkInterfaceStatus
   */
  constructor(State: OcaNetworkInterfaceState, AdaptationData: Uint8Array);

  /**
   * Generic state of the network interface
   * @type OcaNetworkInterfaceState
   */
  State: OcaNetworkInterfaceState;

  /**
   * Adaptation-dependent state data
   * @type Uint8Array
   */
  AdaptationData: Uint8Array;
}
