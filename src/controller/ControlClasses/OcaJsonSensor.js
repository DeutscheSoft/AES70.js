import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * JSON value actuator, with or without schema.
 * @extends OcaBasicSensor
 * @class OcaJsonSensor
 */
export const OcaJsonSensor = make_control_class(
  'OcaJsonSensor',
  5,
  '\u0001\u0001\u0002\u0001\u000e',
  1,
  OcaBasicSensor,
  [
    ['GetValue', 5, 1, [], [OcaString]],
    ['GetMaxLen', 5, 2, [], [OcaUint16]],
    ['SetMaxLen', 5, 3, [OcaUint16], []],
  ],
  [
    ['Value', [OcaString], 5, 1, false, false, null],
    ['MaxLen', [OcaUint16], 5, 2, false, false, null],
  ],
  []
);

/**
 * Gets the value of the **Value** property.
 *
 * @method OcaJsonSensor#GetValue
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the maximum number of bytes that may be returned.
 *
 * @method OcaJsonSensor#GetMaxLen
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the maximum number of bytes that the object may return. Optional method.
 *
 * @method OcaJsonSensor#SetMaxLen
 * @param {number} Len
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Value`` changes in the remote object.
 * The property ``Value`` is described in the AES70 standard as follows.
 * The JSON value.
 *
 * @member {PropertyEvent<string>} OcaJsonSensor#OnValueChanged
 */
/**
 * This event is emitted when the property ``MaxLen`` changes in the remote object.
 * The property ``MaxLen`` is described in the AES70 standard as follows.
 * Maximum length of the returned value. May be readonly in some
 * implementations.
 *
 * @member {PropertyEvent<number>} OcaJsonSensor#OnMaxLenChanged
 */
