import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Represents a function that turns on some kind of human-detectable indicator
 * for purposes of device identification during network setup. Physical form of
 * indicator is not defined by OCA, so it could be anything, e.g.
 *
 *  - LED
 *
 *  - Foghorn
 *
 *  - Smoke emitter
 *
 *  - Little waving robot hand wearing white glove
 *
 *  - Jack-in-the-box popout
 *
 *  - et cetera
 *
 *
 * @extends OcaActuator
 * @class OcaIdentificationActuator
 */
export declare class OcaIdentificationActuator extends OcaActuator {
  /**
   * This event is emitted whenever Active changes.
   */
  OnActiveChanged: PropertyEvent<boolean>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the current identification indicator activity state. The return value
   * indicates whether the state was successfully retrieved.
   *
   * @method OcaIdentificationActuator#GetActive
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetActive(): Promise<boolean>;

  /**
   * Sets the Active state (i.e. value of the Active property). The return value
   * indicates whether the state was successfully set.
   *
   * @method OcaIdentificationActuator#SetActive
   * @param {boolean} active
   *
   * @returns {Promise<void>}
   */
  SetActive(active: boolean): Promise<void>;
}
