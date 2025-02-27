import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * 16-bit unsigned integer actuator
 * @extends OcaBasicActuator
 * @class OcaUint16Actuator
 */
export declare class OcaUint16Actuator extends OcaBasicActuator {
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
   * @method OcaUint16Actuator#GetSetting
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSetting(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Setting** property.
   *
   * @method OcaUint16Actuator#SetSetting
   * @param {number} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: number): Promise<void>;
}
