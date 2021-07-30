import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

import { PropertyEvent } from '../Base';

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends OcaBasicActuator
 * @class OcaBitstringActuator
 */
export declare class OcaBitstringActuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Bitstring changes.
   */
  OnBitstringChanged: PropertyEvent<boolean[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the number of bits in the string. The return value indicates whether the property was successfully gathered.
   *
   * @method OcaBitstringActuator#GetNrBits
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetNrBits(): Promise<number>;

  /**
   * Gets the bit value of the given bit. The return value indicates whether the property was successfully gathered.
   *
   * @method OcaBitstringActuator#GetBit
   * @param {number} bitNr
   *
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetBit(bitNr: number): Promise<boolean>;

  /**
   * Sets the bit value of the given bit. The return value indicates whether the property was successfully set.
   *
   * @method OcaBitstringActuator#SetBit
   * @param {number} bitNr
   *
   * @param {boolean} Value
   *
   * @returns {Promise<void>}
   */
  SetBit(bitNr: number, Value: boolean): Promise<void>;

  /**
   * Gets the entire bitstring.The return value indicates whether the property was successfully gathered.
   *
   * @method OcaBitstringActuator#GetBitstring
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetBitstring(): Promise<boolean[]>;

  /**
   * Sets the entire bitstring. The return value indicates whether the property was successfully set.
   *
   * @method OcaBitstringActuator#SetBitstring
   * @param {boolean[]} BitString
   *
   * @returns {Promise<void>}
   */
  SetBitstring(BitString: boolean[]): Promise<void>;
}
