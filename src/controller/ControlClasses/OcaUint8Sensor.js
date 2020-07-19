import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';

/**
 * Basic uint8 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint8Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint8Sensor = make_control_class(
  'OcaUint8Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0006',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint8, OcaUint8, OcaUint8]]],
  [['Reading', [OcaUint8], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint8Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint8,OcaUint8,OcaUint8>>}
 */
/**
 * Uint8 reading.
 * @member RemoteControlClasses.OcaUint8Sensor#OnReadingChanged {PropertyEvent<OcaUint8>} - This event is emitted when Reading changes in the remote object.
 */
