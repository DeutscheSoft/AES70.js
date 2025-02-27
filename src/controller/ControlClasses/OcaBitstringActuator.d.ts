import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaBasicActuator } from './OcaBasicActuator';

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends OcaBasicActuator
 * @class OcaBitstringActuator
 */
export declare class OcaBitstringActuator extends OcaBasicActuator {
  /**
   * This event is emitted whenever Setting changes.
   */
  OnSettingChanged: PropertyEvent<boolean[]>;

  /**
   * An alias for OnSettingChanged
   */
  OnBitstringChanged: PropertyEvent<boolean[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the number of bits in the string.
   *
   * @method OcaBitstringActuator#GetNrBits
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetNrBits(): Promise<number>;

  /**
   * Gets the bit value of the given bit.
   *
   * @method OcaBitstringActuator#GetBit
   * @param {number} bitNr
   *
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetBit(bitNr: number): Promise<boolean>;

  /**
   * Sets the bit value of the given bit.
   *
   * @method OcaBitstringActuator#SetBit
   * @param {number} bitNr
   * @param {boolean} Value
   *
   * @returns {Promise<void>}
   */
  SetBit(bitNr: number, Value: boolean): Promise<void>;

  /**
   * Gets the entire bitstring.
   *
   * @method OcaBitstringActuator#GetSetting
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetSetting(): Promise<boolean[]>;

  /**
   * Gets the entire bitstring.
   * An alias for GetSetting.
   *
   * @method OcaBitstringActuator#GetBitstring
   * @returns {Promise<boolean[]>}
   *   A promise which resolves to a single value of type ``boolean[]``.
   */
  GetBitstring(): Promise<boolean[]>;

  /**
   * Sets the entire bitstring.
   *
   * @method OcaBitstringActuator#SetSetting
   * @param {boolean[]} Setting
   *
   * @returns {Promise<void>}
   */
  SetSetting(Setting: boolean[]): Promise<void>;

  /**
   * Sets the entire bitstring.
   * An alias for SetSetting.
   *
   * @method OcaBitstringActuator#SetBitstring
   * @param {boolean[]} Setting
   *
   * @returns {Promise<void>}
   */
  SetBitstring(Setting: boolean[]): Promise<void>;
}
