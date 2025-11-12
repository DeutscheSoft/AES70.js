import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * UTF-8 string sensor.
 * @extends OcaBasicSensor
 * @class OcaStringSensor
 */
export declare class OcaStringSensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever Reading changes.
   */
  OnReadingChanged: PropertyEvent<string>;

  /**
   * An alias for OnReadingChanged
   */
  OnStringChanged: PropertyEvent<string>;
  /**
   * This event is emitted whenever MaxLen changes.
   */
  OnMaxLenChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the entire string.
   *
   * @method OcaStringSensor#GetReading
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetReading(): Promise<string>;

  /**
   * Gets the entire string.
   * An alias for GetReading.
   *
   * @method OcaStringSensor#GetString
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetString(): Promise<string>;

  /**
   * Gets the maximum number of bytes that may be returned.
   *
   * @method OcaStringSensor#GetMaxLen
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxLen(): Promise<number>;

  /**
   * Sets the maximum number of bytes that the object may return.
   *
   * @method OcaStringSensor#SetMaxLen
   * @param {number} maxLen
   *
   * @returns {Promise<void>}
   */
  SetMaxLen(maxLen: number): Promise<void>;
}
