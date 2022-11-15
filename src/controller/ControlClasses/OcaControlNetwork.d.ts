import { OcaNetworkControlProtocol } from '../../types/OcaNetworkControlProtocol';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaApplicationNetwork } from './OcaApplicationNetwork';

/**
 * This was not documented in the OCA standard.
 * @extends OcaApplicationNetwork
 * @class OcaControlNetwork
 */
export declare class OcaControlNetwork extends OcaApplicationNetwork {
  /**
   * This event is emitted whenever Protocol changes.
   */
  OnProtocolChanged: PropertyEvent<OcaNetworkControlProtocol>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the network's Protocol property. Return status indicates whether the operation was successful.
   *
   * @method OcaControlNetwork#GetControlProtocol
   * @returns {Promise<OcaNetworkControlProtocol>}
   *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
   */
  GetControlProtocol(): Promise<OcaNetworkControlProtocol>;
}
