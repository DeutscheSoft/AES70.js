import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * Basic Uint64 actuator.
 * @extends OcaBasicActuator
 * @class OcaUint64Actuator
 */
export declare class OcaUint64Actuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<number | BigInt>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the Gain property. The return value indicates
   * whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Setting of type ``number|BigInt``
   * - minSetting of type ``number|BigInt``
   * - maxSetting of type ``number|BigInt``
   *
   * @method OcaUint64Actuator#GetSetting
   * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
   */
  GetSetting(): Promise<
    Arguments<[number | BigInt, number | BigInt, number | BigInt]>
  >;

  /**
   * Sets the value of the Level property. The return value indicates whether
   * the property was successfully set.
   *
   * @method OcaUint64Actuator#SetSetting
   * @param {number|BigInt} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: number | BigInt): Promise<void>;
}
