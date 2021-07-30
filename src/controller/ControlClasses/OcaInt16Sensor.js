import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaInt16 } from '../../OCP1/OcaInt16.js';

/**
 * Basic int16 sensor.
 * @extends OcaBasicSensor
 * @class OcaInt16Sensor
 */
export const OcaInt16Sensor = make_control_class(
  'OcaInt16Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0003',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt16, OcaInt16, OcaInt16]]],
  [['Reading', [OcaInt16], 5, 1, false, false, null]],
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
 * @method OcaInt16Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Int16 reading.
 *
 * @member {PropertyEvent<number>} OcaInt16Sensor#OnReadingChanged
 */
