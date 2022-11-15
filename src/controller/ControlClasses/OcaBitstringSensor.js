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
  2,
  OcaBasicSensor,
  [
    ['GetNrBits', 5, 1, [], [OcaUint16]],
    ['GetBit', 5, 2, [OcaUint16], [OcaUint8]],
    ['GetBitString', 5, 3, [], [OcaBitstring]],
  ],
  [['BitString', [OcaBitstring], 5, 1, false, false, null]],
  []
);

/**
 * Gets the number of bits of the bitmask data. Returned status indicates success or failure of the retrieval.
 *
 * @method OcaBitstringSensor#GetNrBits
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the value of the given bit. Return status indicates success or failure of the retrieval.
 *
 * @method OcaBitstringSensor#GetBit
 * @param {number} bitNr
 *
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the entire bitstring. Return status indicates success or failure of the retrieval.
 *
 * @method OcaBitstringSensor#GetBitString
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * This event is emitted when the property BitString changes in the remote object.
 * The property ``BitString`` is described in the AES70 standard as follows.
 * The bitstring.
 *
 * @member {PropertyEvent<boolean[]>} OcaBitstringSensor#OnBitStringChanged
 */
