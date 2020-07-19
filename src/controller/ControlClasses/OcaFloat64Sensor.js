import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaFloat64 } from '../../OCP1/OcaFloat64.js';

/**
 * Basic Float64 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaFloat64Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFloat64Sensor = make_control_class(
  'OcaFloat64Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u000b',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaFloat64, OcaFloat64, OcaFloat64]]],
  [['Reading', [OcaFloat64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat64Sensor#GetReading
 * @returns {Promise<Arguments<OcaFloat64,OcaFloat64,OcaFloat64>>}
 */
/**
 * Uint64 reading.
 * @member RemoteControlClasses.OcaFloat64Sensor#OnReadingChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Reading changes in the remote object.
 */
