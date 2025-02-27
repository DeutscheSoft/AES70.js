import { OcaBitstring } from '../../OCP1/OcaBitstring.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends OcaBasicActuator
 * @class OcaBitstringActuator
 */
export const OcaBitstringActuator = make_control_class(
  'OcaBitstringActuator',
  5,
  '\u0001\u0001\u0001\u0001\r',
  3,
  OcaBasicActuator,
  [
    ['GetNrBits', 5, 1, [], [OcaUint16]],
    ['GetBit', 5, 2, [OcaUint16], [OcaBoolean]],
    ['SetBit', 5, 3, [OcaUint16, OcaBoolean], []],
    ['GetSetting', 5, 4, [], [OcaBitstring], ['GetBitstring']],
    ['SetSetting', 5, 5, [OcaBitstring], [], ['SetBitstring']],
  ],
  [['Setting', [OcaBitstring], 5, 1, false, false, ['Bitstring']]],
  []
);

/**
 * Gets the number of bits in the string.
 *
 * @method OcaBitstringActuator#GetNrBits
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the bit value of the given bit.
 *
 * @method OcaBitstringActuator#GetBit
 * @param {number} bitNr
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the bit value of the given bit.
 *
 * @method OcaBitstringActuator#SetBit
 * @param {number} bitNr
 * @param {boolean} Value
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the entire bitstring.
 *
 * @method OcaBitstringActuator#GetSetting
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Gets the entire bitstring.
 * An alias for GetSetting.
 *
 * @method OcaBitstringActuator#GetBitstring
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Sets the entire bitstring.
 *
 * @method OcaBitstringActuator#SetSetting
 * @param {boolean[]} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the entire bitstring.
 * An alias for SetSetting.
 *
 * @method OcaBitstringActuator#SetBitstring
 * @param {boolean[]} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Setting`` changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * The bitstring data. New name for v3 of this class.
 *
 * @member {PropertyEvent<boolean[]>} OcaBitstringActuator#OnSettingChanged
 */
/**
 * An alias for OnSettingChanged
 *
 * @member {PropertyEvent<boolean[]>} OcaBitstringActuator#OnBitstringChanged
 */
