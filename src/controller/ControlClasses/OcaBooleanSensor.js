import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';

/**
 * Basic boolean sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaBooleanSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the <b>Reading </b>property. The return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaBooleanSensor#GetReading
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Boolean reading.
 * @member RemoteControlClasses.OcaBooleanSensor#OnReadingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Reading changes in the remote object.
 */
