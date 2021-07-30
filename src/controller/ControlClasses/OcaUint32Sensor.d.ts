import { RemoteDevice } from '../remote_device';
import { OcaBasicSensor } from './OcaBasicSensor';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../property_event';

/**
 * Basic uint32 sensor.
 * @extends OcaBasicSensor
 * @class OcaUint32Sensor
 */
export declare class OcaUint32Sensor extends OcaBasicSensor {
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
   * @method OcaUint32Sensor#GetReading
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetReading(): Promise<Arguments<[number, number, number]>>;
}
