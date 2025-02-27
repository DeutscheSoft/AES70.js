import { OcaUint64 } from '../../OCP1/OcaUint64.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';

/**
 * 64-bit unsigned integer actuator
 * @extends OcaBasicActuator
 * @class OcaUint64Actuator
 */
export const OcaUint64Actuator = make_control_class(
  'OcaUint64Actuator',
  5,
  '\u0001\u0001\u0001\u0001\t',
  3,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint64, OcaUint64, OcaUint64]],
    ['SetSetting', 5, 2, [OcaUint64], []],
  ],
  [['Setting', [OcaUint64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Setting** property.
 * The return values of this method are
 *
 * - Setting of type ``number|BigInt``
 * - minSetting of type ``number|BigInt``
 * - maxSetting of type ``number|BigInt``
 *
 * @method OcaUint64Actuator#GetSetting
 * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
 */
/**
 * Sets the value of the **Setting** property.
 *
 * @method OcaUint64Actuator#SetSetting
 * @param {number|BigInt} Setting
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Setting`` changes in the remote object.
 * The property ``Setting`` is described in the AES70 standard as follows.
 * Uint64 setting.
 *
 * @member {PropertyEvent<number|BigInt>} OcaUint64Actuator#OnSettingChanged
 */
