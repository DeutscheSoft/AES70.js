import { make_control_class } from './Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic uint16 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaUint16Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint16Actuator = make_control_class(
  'OcaUint16Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0007',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaUint16, OcaUint16, OcaUint16]],
    ['SetSetting', 5, 2, [OcaUint16], []],
  ],
  [['Setting', [OcaUint16], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the Setting property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint16Actuator#GetSetting
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Sets the value of the <b>Setting </b>property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaUint16Actuator#SetSetting
 * @param Setting {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Uint16 setting.
 * @member RemoteControlClasses.OcaUint16Actuator#OnSettingChanged {PropertyEvent<OcaUint16>} - This event is emitted when Setting changes in the remote object.
 */
