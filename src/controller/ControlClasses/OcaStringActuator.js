import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * UTF-8 String actuator.
 * @extends OcaBasicActuator
 * @class OcaStringActuator
 */
export const OcaStringActuator = make_control_class(
  'OcaStringActuator',
  5,
  '\u0001\u0001\u0001\u0001\f',
  3,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaString]],
    ['SetSetting', 5, 2, [OcaString], []],
    ['GetMaxLen', 5, 3, [], [OcaUint16]],
  ],
  [
    ['Setting', [OcaString], 5, 1, false, false, null],
    ['MaxLen', [OcaUint16], 5, 2, true, false, null],
  ],
  []
);

/**
 * Gets the value of the **Setting** property.
 *
 * @method OcaStringActuator#GetSetting
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **Setting** property.
 *
 * @method OcaStringActuator#SetSetting
 * @param {string} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * Output parameter that shall hold the maximum allowable length of the Setting
 * property if the method succeeds
 *
 * @method OcaStringActuator#GetMaxLen
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * This event is emitted when the property ``Setting`` changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Value.
 *
 * @member {PropertyEvent<string>} OcaStringActuator#OnSettingChanged
 */
