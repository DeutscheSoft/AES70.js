import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';

/**
 * Basic Uint64 sensor.
 * @extends OcaBasicSensor
 * @class OcaUint64Sensor
 */
export const OcaUint64Sensor = make_control_class(
  'OcaUint64Sensor',
  5,
  '\u0001\u0001\u0002\u0001\t',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint64, OcaUint64, OcaUint64]]],
  [['Reading', [OcaUint64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the  **Reading** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Reading of type ``number|BigInt``
 * - minReading of type ``number|BigInt``
 * - maxReading of type ``number|BigInt``
 *
 * @method OcaUint64Sensor#GetReading
 * @returns {Promise<Arguments<number|BigInt,number|BigInt,number|BigInt>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Uint64 reading.
 *
 * @member {PropertyEvent<number|BigInt>} OcaUint64Sensor#OnReadingChanged
 */
