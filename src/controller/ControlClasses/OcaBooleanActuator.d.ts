import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

import { PropertyEvent } from '../property_event';

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
   * Gets the  **Setting** property. The return value indicates whether the data was successfully retrieved.
   *
   * @method OcaBooleanActuator#GetSetting
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetSetting(): Promise<boolean>;

  /**
   * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
   *
   * @method OcaBooleanActuator#SetSetting
   * @param {boolean} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: boolean): Promise<void>;
}
