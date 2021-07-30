import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../Base';

/**
 * A temperature actuator. Works in Celsius.
 * @extends OcaActuator
 * @class OcaTemperatureActuator
 */
export declare class OcaTemperatureActuator extends OcaActuator {
  /**
   * This event is emitted whenever Temperature changes.
   */
  OnTemperatureChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the Temperature property. The return value indicates whether the property was successfully retrieved.
   * The return values of this method are
   *
   * - temperature of type ``number``
   * - minTemperature of type ``number``
   * - maxTemperature of type ``number``
   *
   * @method OcaTemperatureActuator#GetTemperature
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetTemperature(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the Temperature property. The return value indicates whether the property was successfully set.
   *
   * @method OcaTemperatureActuator#SetTemperature
   * @param {number} temperature
   *
   * @returns {Promise<void>}
   */
  SetTemperature(temperature: number): Promise<void>;
}
