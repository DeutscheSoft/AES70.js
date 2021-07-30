import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaInt8 } from '../../OCP1/OcaInt8.js';

/**
 * Basic int8 actuator.
 * @extends OcaBasicActuator
 * @class OcaInt8Actuator
 */
export const OcaInt8Actuator = make_control_class(
  'OcaInt8Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0002',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt8, OcaInt8, OcaInt8]],
    ['SetSetting', 5, 2, [OcaInt8], []],
  ],
  [['Setting', [OcaInt8], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the  **Setting** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Setting of type ``number``
 * - minSetting of type ``number``
 * - maxSetting of type ``number``
 *
 * @method OcaInt8Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaInt8Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Int8 setting.
 *
 * @member {PropertyEvent<number>} OcaInt8Actuator#OnSettingChanged
 */
