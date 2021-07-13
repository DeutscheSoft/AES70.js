import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Basic uint32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint32Actuator = make_control_class(
  'OcaUint32Actuator',
  5,
  '\u0001\u0001\u0001\u0001\b',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint32, OcaUint32, OcaUint32]],
    ['SetSetting', 5, 2, [OcaUint32], []],
  ],
  [['Setting', [OcaUint32], 5, 1, false, false, null]],
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
 * @method RemoteControlClasses.OcaUint32Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaUint32Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Uint32 setting.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaUint32Actuator#OnSettingChanged
 */
