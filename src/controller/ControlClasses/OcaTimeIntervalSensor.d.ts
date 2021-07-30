import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../Base';

/**
 * Time interval sensor.
 * @extends OcaSensor
 * @class OcaTimeIntervalSensor
 */
export declare class OcaTimeIntervalSensor extends OcaSensor {
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
   * @method OcaTimeIntervalSensor#GetReading
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetReading(): Promise<Arguments<[number, number, number]>>;
}
