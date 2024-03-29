import { OcaInt64 } from '../../OCP1/OcaInt64.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Basic int64 sensor.
 * @extends OcaBasicSensor
 * @class OcaInt64Sensor
 */
export const OcaInt64Sensor = make_control_class(
  'OcaInt64Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0005',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt64, OcaInt64, OcaInt64]]],
  [['Reading', [OcaInt64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Reading** property. The return value
 * indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Reading of type ``number|BigInt``
 * - minReading of type ``number|BigInt``
 * - maxReading of type ``number|BigInt``
 *
 * @method OcaInt64Sensor#GetReading
 * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Int64 reading.
 *
 * @member {PropertyEvent<number|BigInt>} OcaInt64Sensor#OnReadingChanged
 */
