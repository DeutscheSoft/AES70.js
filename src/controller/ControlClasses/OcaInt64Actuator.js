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
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt64Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt64,OcaInt64,OcaInt64>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt64Actuator#SetSetting
 * @param Value {OcaInt64}
 *
 * @returns {Promise}
 */
/**
 * Int64 setting.
 * @member RemoteControlClasses.OcaInt64Actuator#OnSettingChanged {PropertyEvent<OcaInt64>} - This event is emitted when Setting changes in the remote object.
 */
