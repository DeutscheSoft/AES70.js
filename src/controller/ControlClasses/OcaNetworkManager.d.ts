import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

/**
 * Optional manager that collects all network interface and network application
 * objects to which the device belongs.
 *
 *  - Must be instantiated in every device that has more than one network
 *    object.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, must have object number 6.
 *
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

  /**
   * This event is emitted whenever NetworkInterfaces changes.
   */
  OnNetworkInterfacesChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever NetworkApplications changes.
   */
  OnNetworkApplicationsChanged: PropertyEvent<number[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the list of object numbers of **OcaNetwork** instances in this device.
   * **Deprecated** in version 2 of this class.
   *
   * @method OcaNetworkManager#GetNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of **OcaStreamNetwork** objects in this
   * device. **Deprecated** in version 2 of this class.
   *
   * @method OcaNetworkManager#GetStreamNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetStreamNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of **OcaControlNetwork** objects in this
   * device. **Deprecated** in version 3 of this class.
   *
   * @method OcaNetworkManager#GetControlNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetControlNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of **OcaMediaTransportNetwork** objects in
   * this device. **Deprecated** in version 3 of this class.
   *
   * @method OcaNetworkManager#GetMediaTransportNetworks
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetMediaTransportNetworks(): Promise<number[]>;

  /**
   * Gets the list of object numbers of all objects that are instances of
   * **OcaNetworkInterface** or a subclass of **OcaNetworkInterface.** Added in
   * version 3 of this class.
   *
   * @method OcaNetworkManager#GetNetworkInterfaces
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetNetworkInterfaces(): Promise<number[]>;

  /**
   * Gets the list of object numbers of all objects that are instances of
   * **OcaNetworkApplication** or a subclass of **OcaNetworkApplication.** Added
   * in version 3 of this class.
   *
   * @method OcaNetworkManager#GetNetworkApplications
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetNetworkApplications(): Promise<number[]>;
}
