import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * 64-bit IEEE floating-point actuator
 * @extends OcaBasicActuator
 * @class OcaFloat64Actuator
 */
export declare class OcaFloat64Actuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Setting** property.
   * The return values of this method are
   *
   * - Setting of type ``number``
   * - minSetting of type ``number``
   * - maxSetting of type ``number``
   *
   * @method OcaFloat64Actuator#GetSetting
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSetting(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Setting** property.
   *
   * @method OcaFloat64Actuator#SetSetting
   * @param {number} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: number): Promise<void>;
}
