import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Signal delay - basic version.
 * @extends OcaActuator
 * @class OcaDelay
 */
export declare class OcaDelay extends OcaActuator {
  /**
   * This event is emitted whenever DelayTime changes.
   */
  OnDelayTimeChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **DelayTime** property.
   * The return values of this method are
   *
   * - Time of type ``number``
   * - minTime of type ``number``
   * - maxTime of type ``number``
   *
   * @method OcaDelay#GetDelayTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetDelayTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **DelayTime** property.
   *
   * @method OcaDelay#SetDelayTime
   * @param {number} delayTime
   *
   * @returns {Promise<void>}
   */
  SetDelayTime(delayTime: number): Promise<void>;
}
