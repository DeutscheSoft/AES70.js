import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Basic float32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaFloat32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFloat32Actuator = make_control_class(
  'OcaFloat32Actuator',
  5,
  '\u0001\u0001\u0001\u0001\n',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSetting', 5, 2, [OcaFloat32], []],
  ],
  [['Setting', [OcaFloat32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat32Actuator#GetSetting
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaFloat32Actuator#SetSetting
 * @param Setting {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Float32 setting.
 * @member RemoteControlClasses.OcaFloat32Actuator#OnSettingChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Setting changes in the remote object.
 */
