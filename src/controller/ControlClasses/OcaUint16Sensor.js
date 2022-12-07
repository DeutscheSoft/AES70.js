import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Basic uint16 sensor.
 * @extends OcaBasicSensor
 * @class OcaUint16Sensor
 */
export const OcaUint16Sensor = make_control_class(
  'OcaUint16Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0007',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint16, OcaUint16, OcaUint16]]],
  [['Reading', [OcaUint16], 5, 1, false, false, null]],
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
 * @method OcaUint16Sensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Uint16 reading.
 *
 * @member {PropertyEvent<number>} OcaUint16Sensor#OnReadingChanged
 */
