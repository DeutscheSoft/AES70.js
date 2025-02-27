import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * 64-bit signed integer actuator
 * @extends OcaBasicActuator
 * @class OcaInt64Actuator
 */
export declare class OcaInt64Actuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<number | BigInt>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Setting** property.
   * The return values of this method are
   *
   * - Setting of type ``number|BigInt``
   * - minSetting of type ``number|BigInt``
   * - maxSetting of type ``number|BigInt``
   *
   * @method OcaInt64Actuator#GetSetting
   * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
   */
  GetSetting(): Promise<
    Arguments<[number | BigInt, number | BigInt, number | BigInt]>
  >;

  /**
   * Sets the **Setting** property.
   *
   * @method OcaInt64Actuator#SetSetting
   * @param {number|BigInt} Value
   *
   * @returns {Promise<void>}
   */
  SetSetting(Value: number | BigInt): Promise<void>;
}
