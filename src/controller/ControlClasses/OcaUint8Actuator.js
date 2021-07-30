import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';

/**
 * Basic uint8 actuator.
 * @extends OcaBasicActuator
 * @class OcaUint8Actuator
 */
export const OcaUint8Actuator = make_control_class(
  'OcaUint8Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0006',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint8, OcaUint8, OcaUint8]],
    ['SetSetting', 5, 2, [OcaUint8], []],
  ],
  [['Setting', [OcaUint8], 5, 1, false, false, null]],
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
 * @method OcaUint8Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method OcaUint8Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Uint8 setting.
 *
 * @member {PropertyEvent<number>} OcaUint8Actuator#OnSettingChanged
 */
