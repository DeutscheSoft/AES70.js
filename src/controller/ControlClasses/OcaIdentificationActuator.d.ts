import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Function that shall turn on some kind of human-detectable indicator for
 * purposes of device identification during network setup. Physical form of
 * indicator is not specified by AES70, so it could be anything, e.g.
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
   * Gets the value of the **Active** property.
   *
   * @method OcaIdentificationActuator#GetActive
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetActive(): Promise<boolean>;

  /**
   * Sets the value of the **Active** property.
   *
   * @method OcaIdentificationActuator#SetActive
   * @param {boolean} active
   *
   * @returns {Promise<void>}
   */
  SetActive(active: boolean): Promise<void>;
}
