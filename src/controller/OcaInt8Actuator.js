import { make_control_class } from './Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaInt8 } from '../OCP1/OcaInt8.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic int8 actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaInt8Actuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt8Actuator = make_control_class(
  'OcaInt8Actuator',
  5,
  '\u0001\u0001\u0001\u0001\u0002',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaInt8, OcaInt8, OcaInt8]],
    ['SetSetting', 5, 2, [OcaInt8], []],
  ],
  [['Setting', [OcaInt8], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Setting </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt8Actuator#GetSetting
 * @returns {Promise<Arguments<OcaInt8,OcaInt8,OcaInt8>>}
 */
/**
 * Sets the <b>Setting </b>property. The return value indicates whether
 * the property was successfully set.
 * @method RemoteControlClasses.OcaInt8Actuator#SetSetting
 * @param Setting {OcaInt8}
 *
 * @returns {Promise}
 */
/**
 * Int8 setting.
 * @member RemoteControlClasses.OcaInt8Actuator#OnSettingChanged {PropertyEvent<OcaInt8>} - This event is emitted when Setting changes in the remote object.
 */
