import { make_control_class } from './Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaInt64 } from '../OCP1/OcaInt64.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic int64 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt64Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt64Sensor = make_control_class(
  'OcaInt64Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0005',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt64, OcaInt64, OcaInt64]]],
  [['Reading', [OcaInt64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt64Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt64,OcaInt64,OcaInt64>>}
 */
/**
 * Int64 reading.
 * @member RemoteControlClasses.OcaInt64Sensor#OnReadingChanged {PropertyEvent<OcaInt64>} - This event is emitted when Reading changes in the remote object.
 */
