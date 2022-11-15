import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicSensor } from './OcaBasicSensor';

/**
 * Text string sensor.
 * @extends OcaBasicSensor
 * @class OcaStringSensor
 */
export declare class OcaStringSensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever String changes.
   */
  OnStringChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever MaxLen changes.
   */
  OnMaxLenChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the entire string. Return status indicates success or failure of the retrieval.
   *
   * @method OcaStringSensor#GetString
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetString(): Promise<string>;

  /**
   * Gets the maximum number of bytes that may be returned. Returned status indicates success or failure of the retrieval.
   *
   * @method OcaStringSensor#GetMaxLen
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxLen(): Promise<number>;

  /**
   * Sets the maximum number of bytes that the object may return. Returned status indicates success or failure of the set.
   *
   * @method OcaStringSensor#SetMaxLen
   * @param {number} maxLen
   *
   * @returns {Promise<void>}
   */
  SetMaxLen(maxLen: number): Promise<void>;
}
