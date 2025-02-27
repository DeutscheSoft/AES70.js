import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Simple frequency actuator.
 * @extends OcaActuator
 * @class OcaFrequencyActuator
 */
export declare class OcaFrequencyActuator extends OcaActuator {
  /**
   * This event is emitted whenever Frequency changes.
   */
  OnFrequencyChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Frequency** property.
   * The return values of this method are
   *
   * - Frequency of type ``number``
   * - minFrequency of type ``number``
   * - maxFrequency of type ``number``
   *
   * @method OcaFrequencyActuator#GetFrequency
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetFrequency(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Frequency** property.
   *
   * @method OcaFrequencyActuator#SetFrequency
   * @param {number} Frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency(Frequency: number): Promise<void>;
}
