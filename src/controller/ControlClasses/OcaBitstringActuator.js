import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaBitstring } from '../../OCP1/OcaBitstring.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends OcaBasicActuator
 * @class OcaBitstringActuator
 */
export const OcaBitstringActuator = make_control_class(
  'OcaBitstringActuator',
  5,
  '\u0001\u0001\u0001\u0001\r',
  2,
  OcaBasicActuator,
  [
    ['GetNrBits', 5, 1, [], [OcaUint16]],
    ['GetBit', 5, 2, [OcaUint16], [OcaBoolean]],
    ['SetBit', 5, 3, [OcaUint16, OcaBoolean], []],
    ['GetBitstring', 5, 4, [], [OcaBitstring]],
    ['SetBitstring', 5, 5, [OcaBitstring], []],
  ],
  [['Bitstring', [OcaBitstring], 5, 1, false, false, null]],
  []
);

/**
 * Gets the number of bits in the string. The return value indicates whether the property was successfully gathered.
 *
 * @method OcaBitstringActuator#GetNrBits
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the bit value of the given bit. The return value indicates whether the property was successfully gathered.
 *
 * @method OcaBitstringActuator#GetBit
 * @param {number} bitNr
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
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
/**
 * Gets the entire bitstring.The return value indicates whether the property was successfully gathered.
 *
 * @method OcaBitstringActuator#GetBitstring
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Sets the entire bitstring. The return value indicates whether the property was successfully set.
 *
 * @method OcaBitstringActuator#SetBitstring
 * @param {boolean[]} BitString
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Bitstring changes in the remote object.
 * The property ``Bitstring`` is described in the AES70 standard as follows.
 * The bitstring data.
 *
 * @member {PropertyEvent<boolean[]>} OcaBitstringActuator#OnBitstringChanged
 */
