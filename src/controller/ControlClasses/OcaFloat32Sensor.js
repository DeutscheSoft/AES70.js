import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Basic float32 sensor.
 * @extends OcaBasicSensor
 * @class OcaFloat32Sensor
 */
export const OcaFloat32Sensor = make_control_class(
  'OcaFloat32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\n',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 5, 1, false, false, null]],
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
 * @method OcaFloat32Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Float32 reading.
 *
 * @member {PropertyEvent<number>} OcaFloat32Sensor#OnReadingChanged
 */
