import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * String actuator.
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
   * Gets the value and max length of the Value property. The return value indicates whether the data was successfully retrieved.
   *
   * @method OcaStringActuator#GetSetting
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetSetting(): Promise<string>;

  /**
   * Sets the value of the Value property. The return value indicates whether the property was successfully set.
   *
   * @method OcaStringActuator#SetSetting
   * @param {string} Value
   *
   * @returns {Promise<void>}
   */
  SetSetting(Value: string): Promise<void>;

  /**
   * Gets the maximum string length that this object can handle.
   *
   * @method OcaStringActuator#GetMaxLen
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxLen(): Promise<number>;
}
