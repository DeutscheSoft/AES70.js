import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaSensor } from './OcaSensor';

/**
 * Power sensor. Reading shall be a watts value and a power factor value.
 * @extends OcaSensor
 * @class OcaPowerSensor
 */
export declare class OcaPowerSensor extends OcaSensor {
  /**
   * This event is emitted whenever Power changes.
   */
  OnPowerChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever PowerFactor changes.
   */
  OnPowerFactorChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Power** property, and the value of the
   * **PowerFactor** propert**y**.
   * The return values of this method are
   *
   * - Power of type ``number``
   * - PowerFactor of type ``number``
   * - minPower of type ``number``
   * - maxPower of type ``number``
   *
   * @method OcaPowerSensor#GetReading
   * @returns {Promise<Arguments<number,number,number,number>>}
   */
  GetReading(): Promise<Arguments<[number, number, number, number]>>;
}
