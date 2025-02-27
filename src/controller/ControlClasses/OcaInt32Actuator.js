import { OcaInt32 } from '../../OCP1/OcaInt32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * 32-bit signed integer actuator
 * @extends OcaBasicActuator
 * @class OcaInt32Actuator
 */
export const OcaInt32Actuator = make_control_class(
  'OcaInt32Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0004',
  3,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt32, OcaInt32, OcaInt32]],
    ['SetSetting', 5, 2, [OcaInt32], []],
  ],
  [['Setting', [OcaInt32], 5, 1, false, false, null]],
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
 * @method OcaInt32Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the** Setting** property.
 *
 * @method OcaInt32Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Setting`` changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Int32 setting.
 *
 * @member {PropertyEvent<number>} OcaInt32Actuator#OnSettingChanged
 */
