import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../property_event';

/**
 * Frequency sensor.
 * @extends OcaSensor
 * @class OcaFrequencySensor
 */
export declare class OcaFrequencySensor extends OcaSensor {
  /**
   * This event is emitted whenever Reading changes.
   */
  OnReadingChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the  **Reading** property. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Reading of type ``number``
   * - minReading of type ``number``
   * - maxReading of type ``number``
   *
   * @method OcaFrequencySensor#GetReading
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetReading(): Promise<Arguments<[number, number, number]>>;
}
