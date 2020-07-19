import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';

/**
 * Basic uint8 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint8Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint8Actuator = make_control_class(
  'OcaUint8Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0006',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint8, OcaUint8, OcaUint8]],
    ['SetSetting', 5, 2, [OcaUint8], []],
  ],
  [['Setting', [OcaUint8], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint8Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint8,OcaUint8,OcaUint8>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaUint8Actuator#SetSetting
 * @param Setting {OcaUint8}
 *
 * @returns {Promise}
 */
/**
 * Uint8 setting.
 * @member RemoteControlClasses.OcaUint8Actuator#OnSettingChanged {PropertyEvent<OcaUint8>} - This event is emitted when Setting changes in the remote object.
 */
