import { make_control_class } from '../Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Frequency sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaFrequencySensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFrequencySensor = make_control_class(
  'OcaFrequencySensor',
  4,
  '\u0001\u0001\u0002\u0004',
  2,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFrequencySensor#GetReading
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Frequency value.
 * @member RemoteControlClasses.OcaFrequencySensor#OnReadingChanged {PropertyEvent<OcaFrequency>} - This event is emitted when Reading changes in the remote object.
 */
