import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Time interval sensor.
 * @extends OcaSensor
 * @class OcaTimeIntervalSensor
 */
export const OcaTimeIntervalSensor = make_control_class(
  'OcaTimeIntervalSensor',
  4,
  '\u0001\u0001\u0002\u0003',
  2,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Reading** property. The return value
 * indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Reading of type ``number``
 * - minReading of type ``number``
 * - maxReading of type ``number``
 *
 * @method OcaTimeIntervalSensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Time interval reading.
 *
 * @member {PropertyEvent<number>} OcaTimeIntervalSensor#OnReadingChanged
 */
