import { make_control_class } from './Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic uint32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint32Sensor = make_control_class(
  'OcaUint32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\b',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint32, OcaUint32, OcaUint32]]],
  [['Reading', [OcaUint32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint32Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint32,OcaUint32,OcaUint32>>}
 */
/**
 * Uint32 reading.
 * @member RemoteControlClasses.OcaUint32Sensor#OnReadingChanged {PropertyEvent<OcaUint32>} - This event is emitted when Reading changes in the remote object.
 */
