import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * 64-bit unsigned integer sensor
 * @extends OcaBasicSensor
 * @class OcaUint64Sensor
 */
export declare class OcaUint64Sensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever Reading changes.
   */
  OnReadingChanged: PropertyEvent<number | BigInt>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Reading** property.
   * The return values of this method are
   *
   * - Reading of type ``number|BigInt``
   * - minReading of type ``number|BigInt``
   * - maxReading of type ``number|BigInt``
   *
   * @method OcaUint64Sensor#GetReading
   * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
   */
  GetReading(): Promise<
    Arguments<[number | BigInt, number | BigInt, number | BigInt]>
  >;
}
