import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * A temperature actuator. Works in Celsius.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaTemperatureActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaTemperatureActuator = make_control_class(
  'OcaTemperatureActuator',
  4,
  '\u0001\u0001\u0001\u0014',
  2,
  OcaActuator,
  [
    ['GetTemperature', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetTemperature', 4, 2, [OcaFloat32], []],
  ],
  [['Temperature', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value of the Temperature property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaTemperatureActuator#GetTemperature
 * @returns {Promise<Arguments<OcaTemperature,OcaTemperature,OcaTemperature>>}
 */
/**
 * Sets the value of the Temperature property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaTemperatureActuator#SetTemperature
 * @param temperature {OcaTemperature}
 *
 * @returns {Promise}
 */
/**
 * The temperature.
 * @member RemoteControlClasses.OcaTemperatureActuator#OnTemperatureChanged {PropertyEvent<OcaTemperature>} - This event is emitted when Temperature changes in the remote object.
 */
