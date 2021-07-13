import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Basic uint32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint32Sensor = make_control_class(
  'OcaUint32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\b',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint32, OcaUint32, OcaUint32]]],
  [['Reading', [OcaUint32], 5, 1, false, false, null]],
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
 * @method RemoteControlClasses.OcaUint32Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Uint32 reading.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaUint32Sensor#OnReadingChanged
 */
