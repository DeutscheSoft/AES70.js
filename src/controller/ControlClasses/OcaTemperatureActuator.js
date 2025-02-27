import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * A temperature actuator with Celsius units of measure.
 * @extends OcaActuator
 * @class OcaTemperatureActuator
 */
export const OcaTemperatureActuator = make_control_class(
  'OcaTemperatureActuator',
  4,
  '\u0001\u0001\u0001\u0014',
  3,
  OcaActuator,
  [
    ['GetTemperature', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetTemperature', 4, 2, [OcaFloat32], []],
  ],
  [['Temperature', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Temperature** property.
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
 * Sets the value of the **Temperature** property.
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
