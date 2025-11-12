import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * A temperature actuator with Celsius units of measure.
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
   * Gets the value and limits of the **Temperature** property.
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
   * Sets the value of the **Temperature** property.
   *
   * @method OcaTemperatureActuator#SetTemperature
   * @param {number} temperature
   *
   * @returns {Promise<void>}
   */
  SetTemperature(temperature: number): Promise<void>;
}
