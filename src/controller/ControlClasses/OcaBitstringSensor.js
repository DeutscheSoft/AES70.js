import { OcaBitstring } from '../../OCP1/OcaBitstring.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Bit string sensor.
 * @extends OcaBasicSensor
 * @class OcaBitstringSensor
 */
export const OcaBitstringSensor = make_control_class(
  'OcaBitstringSensor',
  5,
  '\u0001\u0001\u0002\u0001\r',
  3,
  OcaBasicSensor,
  [
    ['GetNrBits', 5, 1, [], [OcaUint16]],
    ['GetBit', 5, 2, [OcaUint16], [OcaUint8]],
    ['GetReading', 5, 3, [], [OcaBitstring], ['GetBitString']],
  ],
  [['Reading', [OcaBitstring], 5, 1, false, false, ['BitString']]],
  []
);

/**
 * Gets the number of bits of the bitstring data.
 *
 * @method OcaBitstringSensor#GetNrBits
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the value of the given bit.
 *
 * @method OcaBitstringSensor#GetBit
 * @param {number} bitNr
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the entire bitstring.
 *
 * @method OcaBitstringSensor#GetReading
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Gets the entire bitstring.
 * An alias for GetReading.
 *
 * @method OcaBitstringSensor#GetBitString
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * The bitstring. New name as of v3 of this class.
 *
 * @member {PropertyEvent<boolean[]>} OcaBitstringSensor#OnReadingChanged
 */
/**
 * An alias for OnReadingChanged
 *
 * @member {PropertyEvent<boolean[]>} OcaBitstringSensor#OnBitStringChanged
 */
