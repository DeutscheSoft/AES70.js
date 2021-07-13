import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaInt16 } from '../../OCP1/OcaInt16.js';

/**
 * Basic int16 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt16Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt16Actuator = make_control_class(
  'OcaInt16Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0003',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt16, OcaInt16, OcaInt16]],
    ['SetSetting', 5, 2, [OcaInt16], []],
  ],
  [['Setting', [OcaInt16], 5, 1, false, false, null]],
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
 * @method RemoteControlClasses.OcaInt16Actuator#GetSetting
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaInt16Actuator#SetSetting
 * @param {number} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Int16 setting.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaInt16Actuator#OnSettingChanged
 */
