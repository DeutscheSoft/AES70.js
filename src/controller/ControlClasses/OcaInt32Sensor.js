import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaInt32 } from '../../OCP1/OcaInt32.js';

/**
 * Basic int32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt32Sensor = make_control_class(
  'OcaInt32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0004',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt32, OcaInt32, OcaInt32]]],
  [['Reading', [OcaInt32], 5, 1, false, false, null]],
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
 * @method RemoteControlClasses.OcaInt32Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Int32 reading.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaInt32Sensor#OnReadingChanged
 */
