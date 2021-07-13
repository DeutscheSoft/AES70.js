import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaInt8 } from '../../OCP1/OcaInt8.js';

/**
 * Basic int8 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt8Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt8Sensor = make_control_class(
  'OcaInt8Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0002',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt8, OcaInt8, OcaInt8]]],
  [['Reading', [OcaInt8], 5, 1, false, false, null]],
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
 * @method RemoteControlClasses.OcaInt8Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Int8 reading.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaInt8Sensor#OnReadingChanged
 */
