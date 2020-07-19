import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaInt32 } from '../../OCP1/OcaInt32.js';

/**
 * Basic int32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt32Actuator = make_control_class(
  'OcaInt32Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0004',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt32, OcaInt32, OcaInt32]],
    ['SetSetting', 5, 2, [OcaInt32], []],
  ],
  [['Setting', [OcaInt32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt32Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt32,OcaInt32,OcaInt32>>}
 */
/**
 * Sets the<b> Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt32Actuator#SetSetting
 * @param Setting {OcaInt32}
 *
 * @returns {Promise}
 */
/**
 * Int32 setting.
 * @member RemoteControlClasses.OcaInt32Actuator#OnSettingChanged {PropertyEvent<OcaInt32>} - This event is emitted when Setting changes in the remote object.
 */
