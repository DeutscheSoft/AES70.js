import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';

/**
 * Basic uint8 sensor.
 * @extends OcaBasicSensor
 * @class OcaUint8Sensor
 */
export const OcaUint8Sensor = make_control_class(
  'OcaUint8Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0006',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint8, OcaUint8, OcaUint8]]],
  [['Reading', [OcaUint8], 5, 1, false, false, null]],
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
 * @method OcaUint8Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Uint8 reading.
 *
 * @member {PropertyEvent<number>} OcaUint8Sensor#OnReadingChanged
 */
