import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Boolean sensor
 * @extends OcaBasicSensor
 * @class OcaBooleanSensor
 */
export declare class OcaBooleanSensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever Reading changes.
   */
  OnReadingChanged: PropertyEvent<boolean>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Reading** property.
   *
   * @method OcaBooleanSensor#GetReading
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetReading(): Promise<boolean>;
}
