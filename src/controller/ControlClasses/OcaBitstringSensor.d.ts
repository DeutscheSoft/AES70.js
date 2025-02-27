import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicSensor } from './OcaBasicSensor';

/**
 * Bit string sensor.
 * @extends OcaBasicSensor
 * @class OcaBitstringSensor
 */
export declare class OcaBitstringSensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever Reading changes.
   */
  OnReadingChanged: PropertyEvent<boolean[]>;

  /**
   * An alias for OnReadingChanged
   */
  OnBitStringChanged: PropertyEvent<boolean[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the number of bits of the bitstring data.
   *
   * @method OcaBitstringSensor#GetNrBits
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetNrBits(): Promise<number>;

  /**
   * Gets the value of the given bit.
   *
   * @method OcaBitstringSensor#GetBit
   * @param {number} bitNr
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetBit(bitNr: number): Promise<number>;

  /**
   * Gets the entire bitstring.
   *
   * @method OcaBitstringSensor#GetReading
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetReading(): Promise<boolean[]>;

  /**
   * Gets the entire bitstring.
   * An alias for GetReading.
   *
   * @method OcaBitstringSensor#GetBitString
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetBitString(): Promise<boolean[]>;
}
