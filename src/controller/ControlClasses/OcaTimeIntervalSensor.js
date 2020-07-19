import { make_control_class } from '../Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Time interval sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaTimeIntervalSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaTimeIntervalSensor = make_control_class(
  'OcaTimeIntervalSensor',
  4,
  '\u0001\u0001\u0002\u0003',
  2,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaTimeIntervalSensor#GetReading
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Time interval reading.
 * @member RemoteControlClasses.OcaTimeIntervalSensor#OnReadingChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Reading changes in the remote object.
 */
