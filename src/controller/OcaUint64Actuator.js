import { make_control_class } from './Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint64 } from '../OCP1/OcaUint64.js';
import { String16 } from '../OCP1/String16.js';

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
 * Gets the value and limits of the Gain property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint64Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint64,OcaUint64,OcaUint64>>}
 */
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaUint64Actuator#SetSetting
 * @param Setting {OcaUint64}
 *
 * @returns {Promise}
 */
/**
 * Uint64 setting.
 * @member RemoteControlClasses.OcaUint64Actuator#OnSettingChanged {PropertyEvent<OcaUint64>} - This event is emitted when Setting changes in the remote object.
 */
