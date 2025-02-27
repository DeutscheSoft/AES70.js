import { OcaFloat64 } from '../../OCP1/OcaFloat64.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * 64-bit IEEE floating-point actuator
 * @extends OcaBasicActuator
 * @class OcaFloat64Actuator
 */
export const OcaFloat64Actuator = make_control_class(
  'OcaFloat64Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u000b',
  3,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaFloat64, OcaFloat64, OcaFloat64]],
    ['SetSetting', 5, 2, [OcaFloat64], []],
  ],
  [['Setting', [OcaFloat64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Setting** property.
 * The return values of this method are
 *
 * - Setting of type ``number``
 * - minSetting of type ``number``
 * - maxSetting of type ``number``
 *
 * @method OcaFloat64Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the **Setting** property.
 *
 * @method OcaFloat64Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Setting`` changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Float64 value.
 *
 * @member {PropertyEvent<number>} OcaFloat64Actuator#OnSettingChanged
 */
