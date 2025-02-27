import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * 32-bit unsigned integer sensor
 * @extends OcaBasicSensor
 * @class OcaUint32Sensor
 */
export const OcaUint32Sensor = make_control_class(
  'OcaUint32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\b',
  3,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint32, OcaUint32, OcaUint32]]],
  [['Reading', [OcaUint32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the **Reading** property.
 * The return values of this method are
 *
 * - Reading of type ``number``
 * - minReading of type ``number``
 * - maxReading of type ``number``
 *
 * @method OcaUint32Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Uint32 reading.
 *
 * @member {PropertyEvent<number>} OcaUint32Sensor#OnReadingChanged
 */
