import { RemoteDevice } from '../remote_device';
import { OcaBasicSensor } from './OcaBasicSensor';

import { PropertyEvent } from '../property_event';

/**
 * Bit string sensor.
 * @extends OcaBasicSensor
 * @class OcaBitstringSensor
 */
export declare class OcaBitstringSensor extends OcaBasicSensor {
  /**
   * This event is emitted whenever BitString changes.
   */
  OnBitStringChanged: PropertyEvent<boolean[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the number of bits of the bitmask data. Returned status indicates success or failure of the retrieval.
   *
   * @method OcaBitstringSensor#GetNrBits
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetNrBits(): Promise<number>;

  /**
   * Gets the value of the given bit. Return status indicates success or failure of the retrieval.
   *
   * @method OcaBitstringSensor#GetBit
   * @param {number} bitNr
   *
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetBit(bitNr: number): Promise<number>;

  /**
   * Gets the entire bitstring. Return status indicates success or failure of the retrieval.
   *
   * @method OcaBitstringSensor#GetBitString
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetBitString(): Promise<boolean[]>;
}
