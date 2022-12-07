import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { make_control_class } from '../make_control_class.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';

/**
 * Basic boolean sensor.
 * @extends OcaBasicSensor
 * @class OcaBooleanSensor
 */
export const OcaBooleanSensor = make_control_class(
  'OcaBooleanSensor',
  5,
  '\u0001\u0001\u0002\u0001\u0001',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaBoolean]]],
  [['Reading', [OcaBoolean], 5, 1, false, false, null]],
  []
);

/**
 * Gets the **Reading** property. The return value indicates whether the data
 * was successfully retrieved.
 *
 * @method OcaBooleanSensor#GetReading
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * This event is emitted when the property ``Reading`` changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Boolean reading.
 *
 * @member {PropertyEvent<boolean>} OcaBooleanSensor#OnReadingChanged
 */
