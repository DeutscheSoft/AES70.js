import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

import { PropertyEvent } from '../Base';

/**
 * Optional manager that collects all media transport and control networks to which the device belongs.
 *
 *  - Must be instantiated once in every device that has more than one network object. In this context, "network object" shall mean an instance of  **OcaNetwork** ,  **OcaStreamNetwork** ,  **OcaApplicationNetwork** , or any subclass of these classes.
 *
 *
 *  - If instantiated, must have object number 6.
 *
 * @extends OcaManager
 * @class OcaNetworkManager
 */
export declare class OcaNetworkManager extends OcaManager {
  /**
   * This event is emitted whenever Networks changes.
   */
  OnNetworksChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever StreamNetworks changes.
   */
  OnStreamNetworksChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever ControlNetworks changes.
   */
  OnControlNetworksChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever MediaTransportNetworks changes.
   */
  OnMediaTransportNetworksChanged: PropertyEvent<number[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the list of object numbers of  **OcaNetwork** instances in this device. Return value indicates whether the list was successfully retrieved.  **Deprecated as of OCA 1.2**
   *
   * @method OcaNetworkManager#GetNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of  **OcaStreamNetwork** instances in this device. Return value indicates whether list was successfully retrieved.  **Deprecated as of OCA 1.4.**
   *
   * @method OcaNetworkManager#GetStreamNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetStreamNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of  **OcaControlNetwork** instances in this device. Return value indicates whether list was successfully retrieved. Introduced in version 1.4.
   *
   * @method OcaNetworkManager#GetControlNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetControlNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of  **OcaMediaTransportNetwork** instances in this device. Return value indicates whether list was successfully retrieved. Introduced in version 1.4.
   *
   * @method OcaNetworkManager#GetMediaTransportNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetMediaTransportNetworks(): Promise<number[]>;
}
