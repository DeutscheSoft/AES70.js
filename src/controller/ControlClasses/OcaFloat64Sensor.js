import { OcaFloat64 } from '../../OCP1/OcaFloat64.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Basic Float64 sensor.
 * @extends OcaBasicSensor
 * @class OcaFloat64Sensor
 */
export const OcaFloat64Sensor = make_control_class(
  'OcaFloat64Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u000b',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaFloat64, OcaFloat64, OcaFloat64]]],
  [['Reading', [OcaFloat64], 5, 1, false, false, null]],
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
 * @method OcaFloat64Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Uint64 reading.
 *
 * @member {PropertyEvent<number>} OcaFloat64Sensor#OnReadingChanged
 */
