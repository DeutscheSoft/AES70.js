import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Gain (or attenuation) element.
 * @extends OcaActuator
 * @class OcaGain
 */
export declare class OcaGain extends OcaActuator {
  /**
   * This event is emitted whenever Gain changes.
   */
  OnGainChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Gain** property.
   * The return values of this method are
   *
   * - Gain of type ``number``
   * - minGain of type ``number``
   * - maxGain of type ``number``
   *
   * @method OcaGain#GetGain
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetGain(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Gain** property.
   *
   * @method OcaGain#SetGain
   * @param {number} Gain
   *
   * @returns {Promise<void>}
   */
  SetGain(Gain: number): Promise<void>;
}
