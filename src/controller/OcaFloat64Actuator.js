import { make_control_class } from './Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaFloat64 } from '../OCP1/OcaFloat64.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic Float64 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaFloat64Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFloat64Actuator = make_control_class(
  'OcaFloat64Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u000b',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaFloat64, OcaFloat64, OcaFloat64]],
    ['SetSetting', 5, 2, [OcaFloat64], []],
  ],
  [['Setting', [OcaFloat64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat64Actuator#GetSetting
 * @returns {Promise<Arguments<OcaFloat64,OcaFloat64,OcaFloat64>>}
 */
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaFloat64Actuator#SetSetting
 * @param Setting {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * Float64 value.
 * @member RemoteControlClasses.OcaFloat64Actuator#OnSettingChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Setting changes in the remote object.
 */
