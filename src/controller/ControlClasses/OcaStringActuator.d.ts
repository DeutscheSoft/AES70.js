import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * UTF-8 String actuator.
 * @extends OcaBasicActuator
 * @class OcaStringActuator
 */
export declare class OcaStringActuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<string>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Setting** property.
   *
   * @method OcaStringActuator#GetSetting
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSetting(): Promise<string>;

  /**
   * Sets the value of the **Setting** property.
   *
   * @method OcaStringActuator#SetSetting
   * @param {string} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: string): Promise<void>;

  /**
   * Output parameter that shall hold the maximum allowable length of the
   * Setting property if the method succeeds
   *
   * @method OcaStringActuator#GetMaxLen
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxLen(): Promise<number>;
}
