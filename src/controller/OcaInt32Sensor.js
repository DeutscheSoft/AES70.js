import { make_control_class } from './Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaInt32 } from '../OCP1/OcaInt32.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic int32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt32Sensor = make_control_class(
  'OcaInt32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0004',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt32, OcaInt32, OcaInt32]]],
  [['Reading', [OcaInt32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt32Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt32,OcaInt32,OcaInt32>>}
 */
/**
 * Int32 reading.
 * @member RemoteControlClasses.OcaInt32Sensor#OnReadingChanged {PropertyEvent<OcaInt32>} - This event is emitted when Reading changes in the remote object.
 */
