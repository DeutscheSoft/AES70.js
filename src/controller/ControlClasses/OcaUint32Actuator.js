import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Basic uint32 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint32Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint32Actuator = make_control_class(
  'OcaUint32Actuator',
  5,
  '\u0001\u0001\u0001\u0001\b',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint32, OcaUint32, OcaUint32]],
    ['SetSetting', 5, 2, [OcaUint32], []],
  ],
  [['Setting', [OcaUint32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint32Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint32,OcaUint32,OcaUint32>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaUint32Actuator#SetSetting
 * @param Setting {OcaUint32}
 *
 * @returns {Promise}
 */
/**
 * Uint32 setting.
 * @member RemoteControlClasses.OcaUint32Actuator#OnSettingChanged {PropertyEvent<OcaUint32>} - This event is emitted when Setting changes in the remote object.
 */
