import { make_control_class } from './Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint64 } from '../OCP1/OcaUint64.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic Uint64 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint64Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint64Sensor = make_control_class(
  'OcaUint64Sensor',
  5,
  '\u0001\u0001\u0002\u0001\t',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint64, OcaUint64, OcaUint64]]],
  [['Reading', [OcaUint64], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint64Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint64,OcaUint64,OcaUint64>>}
 */
/**
 * Uint64 reading.
 * @member RemoteControlClasses.OcaUint64Sensor#OnReadingChanged {PropertyEvent<OcaUint64>} - This event is emitted when Reading changes in the remote object.
 */
