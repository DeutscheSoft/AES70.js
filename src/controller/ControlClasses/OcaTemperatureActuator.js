import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * A temperature actuator. Works in Celsius.
 * @extends OcaActuator
 * @class OcaTemperatureActuator
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
 * The return values of this method are
 *
 * - temperature of type ``number``
 * - minTemperature of type ``number``
 * - maxTemperature of type ``number``
 *
 * @method OcaTemperatureActuator#GetTemperature
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Temperature property. The return value indicates
 * whether the property was successfully set.
 *
 * @method OcaTemperatureActuator#SetTemperature
 * @param {number} temperature
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Temperature`` changes in the remote object.
 * The property ``Temperature`` is described in the AES70 standard as follows.
 * The temperature.
 *
 * @member {PropertyEvent<number>} OcaTemperatureActuator#OnTemperatureChanged
 */
