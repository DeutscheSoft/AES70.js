import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * JSON value actuator, with or without schema.
 * @extends OcaBasicSensor
 * @class OcaJsonSensor
 */
export declare class OcaJsonSensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever Value changes.
   */
  OnValueChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever MaxLen changes.
   */
  OnMaxLenChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Value** property.
   *
   * @method OcaJsonSensor#GetValue
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetValue(): Promise<string>;

  /**
   * Gets the maximum number of bytes that may be returned.
   *
   * @method OcaJsonSensor#GetMaxLen
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxLen(): Promise<number>;

  /**
   * Sets the maximum number of bytes that the object may return. Optional
   * method.
   *
   * @method OcaJsonSensor#SetMaxLen
   * @param {number} Len
   *
   * @returns {Promise<void>}
   */
  SetMaxLen(Len: number): Promise<void>;
}
