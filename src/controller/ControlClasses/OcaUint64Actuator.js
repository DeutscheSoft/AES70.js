import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';

/**
 * Basic Uint64 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint64Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint64Actuator = make_control_class(
  'OcaUint64Actuator',
  5,
  '\u0001\u0001\u0001\u0001\t',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint64, OcaUint64, OcaUint64]],
    ['SetSetting', 5, 2, [OcaUint64], []],
  ],
  [['Setting', [OcaUint64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the Gain property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Setting of type ``number|BigInt``
 * - minSetting of type ``number|BigInt``
 * - maxSetting of type ``number|BigInt``
 *
 * @method RemoteControlClasses.OcaUint64Actuator#GetSetting
 * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
 */
/**
 * Sets the value of the Level property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaUint64Actuator#SetSetting
 * @param {number|BigInt} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Setting changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Uint64 setting.
 *
 * @member {PropertyEvent<number|BigInt>} RemoteControlClasses.OcaUint64Actuator#OnSettingChanged
 */
