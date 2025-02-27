import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * JSON value actuator.
 * @extends OcaBasicActuator
 * @class OcaJsonActuator
 */
export const OcaJsonActuator = make_control_class(
  'OcaJsonActuator',
  5,
  '\u0001\u0001\u0001\u0001\u000e',
  1,
  OcaBasicActuator,
  [
    ['GetValue', 5, 1, [], [OcaString]],
    ['SetValue', 5, 2, [OcaString], []],
    ['GetMaxLen', 5, 3, [], [OcaUint16]],
  ],
  [
    ['Value', [OcaString], 5, 1, false, false, null],
    ['MaxLen', [OcaUint16], 5, 2, true, false, null],
  ],
  []
);

/**
 * Gets the value of the **Value** property.
 *
 * @method OcaJsonActuator#GetValue
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **Value** property.
 *
 * @method OcaJsonActuator#SetValue
 * @param {string} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * Output parameter that shall hold the maximum allowable length of the Setting
 * property if the method succeeds.
 *
 * @method OcaJsonActuator#GetMaxLen
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * This event is emitted when the property ``Value`` changes in the remote object.
 * The property ``Value`` is described in the AES70 standard as follows.
 * The JSON value.
 *
 * @member {PropertyEvent<string>} OcaJsonActuator#OnValueChanged
 */
