/*
 * This file has been generated.
 */
import {
  IOcaNetworkAdvertisingService,
  OcaNetworkAdvertisingService,
} from './OcaNetworkAdvertisingService';

export declare interface IOcaNetworkAdvertisingMechanism {
  /**
   * Advertising service used
   * @type OcaNetworkAdvertisingService
   */
  Service: IOcaNetworkAdvertisingService;

  /**
   * Advertising parameters. Content depends on advertising service used.
   * @type string
   */
  Parameters: string;
}

export declare class OcaNetworkAdvertisingMechanism
  implements IOcaNetworkAdvertisingMechanism {
  /**
   * Descriptor of a Network Advertising mechanism specified by a Network
   * Assignment.
   * @class OcaNetworkAdvertisingMechanism
   */
  constructor(Service: OcaNetworkAdvertisingService, Parameters: string);

  /**
   * Advertising service used
   * @type OcaNetworkAdvertisingService
   */
  Service: OcaNetworkAdvertisingService;

  /**
   * Advertising parameters. Content depends on advertising service used.
   * @type string
   */
  Parameters: string;
}
