import { OcaNetworkControlProtocol } from '../../types/OcaNetworkControlProtocol.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaApplicationNetwork } from './OcaApplicationNetwork.js';

/**
 * @extends OcaApplicationNetwork
 * @class OcaControlNetwork
 */
export declare class OcaControlNetwork extends OcaApplicationNetwork {
  /**
   * This event is emitted whenever Protocol changes.
   */
  OnProtocolChanged: PropertyEvent<OcaNetworkControlProtocol>;

  /**
   * An alias for OnProtocolChanged
   */
  OnControlProtocolChanged: PropertyEvent<OcaNetworkControlProtocol>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the network's Protocol property. Return status indicates whether the
   * operation was successful.
   *
   * @method OcaControlNetwork#GetControlProtocol
   * @returns {Promise<OcaNetworkControlProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
   */
  GetControlProtocol(): Promise<OcaNetworkControlProtocol>;
}
