import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaInt64 } from '../../OCP1/OcaInt64.js';

/**
 * Basic int64 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt64Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt64Actuator = make_control_class(
  'OcaInt64Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0005',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt64, OcaInt64, OcaInt64]],
    ['SetSetting', 5, 2, [OcaInt64], []],
  ],
  [['Setting', [OcaInt64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the  **Setting** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Setting of type ``number|BigInt``
 * - minSetting of type ``number|BigInt``
 * - maxSetting of type ``number|BigInt``
 *
 * @method RemoteControlClasses.OcaInt64Actuator#GetSetting
 * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
 */
/**
 * Sets the  **Setting** property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaInt64Actuator#SetSetting
 * @param {number|BigInt} Value
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Int64 setting.
 *
 * @member {PropertyEvent<number|BigInt>} RemoteControlClasses.OcaInt64Actuator#OnSettingChanged
 */
