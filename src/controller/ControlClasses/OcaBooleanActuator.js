import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';

/**
 * Basic boolean actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaBooleanActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaBooleanActuator = make_control_class(
  'OcaBooleanActuator',
  5,
  '\u0001\u0001\u0001\u0001\u0001',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaBoolean]],
    ['SetSetting', 5, 2, [OcaBoolean], []],
  ],
  [['Setting', [OcaBoolean], 5, 1, false, false, null]],
  []
);

/**
 * Gets the <b>Setting </b>property. The return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaBooleanActuator#GetSetting
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaBooleanActuator#SetSetting
 * @param Setting {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Boolean setting.
 * @member RemoteControlClasses.OcaBooleanActuator#OnSettingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Setting changes in the remote object.
 */
