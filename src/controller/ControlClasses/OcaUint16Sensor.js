import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * Basic uint16 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaUint16Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaUint16Sensor = make_control_class(
  'OcaUint16Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0007',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaUint16, OcaUint16, OcaUint16]]],
  [['Reading', [OcaUint16], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaUint16Sensor#GetReading
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Uint16 reading.
 * @member RemoteControlClasses.OcaUint16Sensor#OnReadingChanged {PropertyEvent<OcaUint16>} - This event is emitted when Reading changes in the remote object.
 */
