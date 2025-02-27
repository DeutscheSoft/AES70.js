import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * UTF-8 string sensor.
 * @extends OcaBasicSensor
 * @class OcaStringSensor
 */
export const OcaStringSensor = make_control_class(
  'OcaStringSensor',
  5,
  '\u0001\u0001\u0002\u0001\f',
  3,
  OcaBasicSensor,
  [
    ['GetReading', 5, 1, [], [OcaString], ['GetString']],
    ['GetMaxLen', 5, 2, [], [OcaUint16]],
    ['SetMaxLen', 5, 3, [OcaUint16], []],
  ],
  [
    ['Reading', [OcaString], 5, 1, false, false, ['String']],
    ['MaxLen', [OcaUint16], 5, 2, false, false, null],
  ],
  []
);

/**
 * Gets the entire string.
 *
 * @method OcaStringSensor#GetReading
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the entire string.
 * An alias for GetReading.
 *
 * @method OcaStringSensor#GetString
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the maximum number of bytes that may be returned.
 *
 * @method OcaStringSensor#GetMaxLen
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the maximum number of bytes that the object may return.
 *
 * @method OcaStringSensor#SetMaxLen
 * @param {number} maxLen
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * The string. New name as of v3 of this class.
 *
 * @member {PropertyEvent<string>} OcaStringSensor#OnReadingChanged
 */
/**
 * An alias for OnReadingChanged
 *
 * @member {PropertyEvent<string>} OcaStringSensor#OnStringChanged
 */
/**
 * This event is emitted when the property ``MaxLen`` changes in the remote object.
 * The property ``MaxLen`` is described in the AES70 standard as follows.
 * Maximum length of the returned string. May be readonly in some
 * implementations.
 *
 * @member {PropertyEvent<number>} OcaStringSensor#OnMaxLenChanged
 */
