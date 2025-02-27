import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * JSON value actuator.
 * @extends OcaBasicActuator
 * @class OcaJsonActuator
 */
export declare class OcaJsonActuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Value changes.
   */
  OnValueChanged: PropertyEvent<string>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Value** property.
   *
   * @method OcaJsonActuator#GetValue
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetValue(): Promise<string>;

  /**
   * Sets the value of the **Value** property.
   *
   * @method OcaJsonActuator#SetValue
   * @param {string} Setting
   *
   * @returns {Promise<void>}
   */
  SetValue(Setting: string): Promise<void>;

  /**
   * Output parameter that shall hold the maximum allowable length of the
   * Setting property if the method succeeds.
   *
   * @method OcaJsonActuator#GetMaxLen
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxLen(): Promise<number>;
}
