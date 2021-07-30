import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

import { PropertyEvent } from '../Base';

/**
 * Optional manager that collects all media decoders/encoders (Codecs) which the device owns.
 *
 *  - Must be instantiated in every device that implements more than one media encoding scheme and/or more than one media decoding scheme.
 *
 *
 *  - If instantiated, object number must be 12.
 *
 * @extends OcaManager
 * @class OcaCodingManager
 */
export declare class OcaCodingManager extends OcaManager {
  /**
   * This event is emitted whenever AvailableEncodingSchemes changes.
   */
  OnAvailableEncodingSchemesChanged: PropertyEvent<Map<number, string>>;

  /**
   * This event is emitted whenever AvailableDecodingSchemes changes.
   */
  OnAvailableDecodingSchemesChanged: PropertyEvent<Map<number, string>>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Retrieves the map of available encoding schemes, indexed by scheme ID. Return value indicates success of the retrieval.
   *
   * @method OcaCodingManager#GetAvailableEncodingSchemes
   * @returns {Promise<Map<number, string>>}
   *   A promise which resolves to a single value of type ``Map<number, string>``.
   */
  GetAvailableEncodingSchemes(): Promise<Map<number, string>>;

  /**
   * Retrieves the map of available decoding schemes, indexed by scheme ID. Return value indicates success of the retrieval.
   *
   * @method OcaCodingManager#GetAvailableDecodingSchemes
   * @returns {Promise<Map<number, string>>}
   *   A promise which resolves to a single value of type ``Map<number, string>``.
   */
  GetAvailableDecodingSchemes(): Promise<Map<number, string>>;
}
