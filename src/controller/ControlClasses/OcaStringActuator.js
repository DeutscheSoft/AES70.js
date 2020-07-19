import { make_control_class } from '../Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * String actuator.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaStringActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaStringActuator = make_control_class(
  'OcaStringActuator',
  5,
  '\u0001\u0001\u0001\u0001\f',
  2,
  OcaBasicActuator,
  [
    ['GetSetting', 5, 1, [], [OcaString]],
    ['SetSetting', 5, 2, [OcaString], []],
    ['GetMaxLen', 5, 3, [], [OcaUint16]],
  ],
  [
    ['Setting', [OcaString], 5, 1, false, false, null],
    ['MaxLen', [OcaUint16], 5, 2, true, false, null],
  ],
  []
);

/**
 * Gets the value and max length of the Value property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaStringActuator#GetSetting
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Value property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaStringActuator#SetSetting
 * @param Value {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the maximum string length that this object can handle.
 * @method RemoteControlClasses.OcaStringActuator#GetMaxLen
 * @returns {Promise<OcaUint16>}
 */
/**
 * Value.
 * @member RemoteControlClasses.OcaStringActuator#OnSettingChanged {PropertyEvent<OcaString>} - This event is emitted when Setting changes in the remote object.
 */
/**
 * Maximum string length that this object can accept.
 */
