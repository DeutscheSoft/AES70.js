import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Basic temperature sensor.
 * @extends OcaSensor
 * @class OcaTemperatureSensor
 */
export const OcaTemperatureSensor = make_control_class(
  'OcaTemperatureSensor',
  4,
  '\u0001\u0001\u0002\u0005',
  2,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the  **Reading** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Reading of type ``number``
 * - minReading of type ``number``
 * - maxReading of type ``number``
 *
 * @method OcaTemperatureSensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Temperature value (Celsius).
 *
 * @member {PropertyEvent<number>} OcaTemperatureSensor#OnReadingChanged
 */
