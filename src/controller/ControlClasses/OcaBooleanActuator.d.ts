import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * Basic boolean actuator.
 * @extends OcaBasicActuator
 * @class OcaBooleanActuator
 */
export declare class OcaBooleanActuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<boolean>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the **Setting** property.
   *
   * @method OcaBooleanActuator#GetSetting
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetSetting(): Promise<boolean>;

  /**
   * Sets the **Setting** property.
   *
   * @method OcaBooleanActuator#SetSetting
   * @param {boolean} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: boolean): Promise<void>;
}
