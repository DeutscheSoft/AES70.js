import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

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
   * Gets the value and limits of the Gain property. The return value indicates whether the data was successfully retrieved.
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
   * Sets the value of the Gain property. The return value indicates whether the property was successfully set.
   *
   * @method OcaGain#SetGain
   * @param {number} Gain
   *
   * @returns {Promise<void>}
   */
  SetGain(Gain: number): Promise<void>;
}
