import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../property_event';

/**
 * Basic int16 actuator.
 * @extends OcaBasicActuator
 * @class OcaInt16Actuator
 */
export declare class OcaInt16Actuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the  **Setting** property. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Setting of type ``number``
   * - minSetting of type ``number``
   * - maxSetting of type ``number``
   *
   * @method OcaInt16Actuator#GetSetting
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSetting(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
   *
   * @method OcaInt16Actuator#SetSetting
   * @param {number} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: number): Promise<void>;
}
