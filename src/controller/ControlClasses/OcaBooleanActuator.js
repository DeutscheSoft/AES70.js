import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * Basic boolean actuator.
 * @extends OcaBasicActuator
 * @class OcaBooleanActuator
 */
export const OcaBooleanActuator = make_control_class(
  'OcaBooleanActuator',
  5,
  '\u0001\u0001\u0001\u0001\u0001',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaBoolean]],
    ['SetSetting', 5, 2, [OcaBoolean], []],
  ],
  [['Setting', [OcaBoolean], 5, 1, false, false, null]],
  []
);

/**
 * Gets the **Setting** property. The return value indicates whether the data
 * was successfully retrieved.
 *
 * @method OcaBooleanActuator#GetSetting
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the **Setting** property. The return value indicates whether the
 * property was successfully set.
 *
 * @method OcaBooleanActuator#SetSetting
 * @param {boolean} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Setting`` changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Boolean setting.
 *
 * @member {PropertyEvent<boolean>} OcaBooleanActuator#OnSettingChanged
 */
