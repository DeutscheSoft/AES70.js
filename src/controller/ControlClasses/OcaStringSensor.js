import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * Text string sensor.
 * @extends OcaBasicSensor
 * @class OcaStringSensor
 */
export const OcaStringSensor = make_control_class(
  'OcaStringSensor',
  5,
  '\u0001\u0001\u0002\u0001\f',
  2,
  OcaBasicSensor,
  [
    ['GetString', 5, 1, [], [OcaString]],
    ['GetMaxLen', 5, 2, [], [OcaUint16]],
    ['SetMaxLen', 5, 3, [OcaUint16], []],
  ],
  [
    ['String', [OcaString], 5, 1, false, false, null],
    ['MaxLen', [OcaUint16], 5, 2, false, false, null],
  ],
  []
);

/**
 * Gets the entire string. Return status indicates success or failure of the retrieval.
 *
 * @method OcaStringSensor#GetString
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the maximum number of bytes that may be returned. Returned status indicates success or failure of the retrieval.
 *
 * @method OcaStringSensor#GetMaxLen
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the maximum number of bytes that the object may return. Returned status indicates success or failure of the set.
 *
 * @method OcaStringSensor#SetMaxLen
 * @param {number} maxLen
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property String changes in the remote object.
 * The property ``String`` is described in the AES70 standard as follows.
 * The string.
 *
 * @member {PropertyEvent<string>} OcaStringSensor#OnStringChanged
 */
/**
 * This event is emitted when the property MaxLen changes in the remote object.
 * The property ``MaxLen`` is described in the AES70 standard as follows.
 * Maximum length of the returned string. May be readonly in some
 * implementations.
 *
 * @member {PropertyEvent<number>} OcaStringSensor#OnMaxLenChanged
 */
