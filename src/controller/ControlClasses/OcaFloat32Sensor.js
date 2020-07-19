import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Basic float32 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaFloat32Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFloat32Sensor = make_control_class(
  'OcaFloat32Sensor',
  5,
  '\u0001\u0001\u0002\u0001\n',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFloat32Sensor#GetReading
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Float32 reading.
 * @member RemoteControlClasses.OcaFloat32Sensor#OnReadingChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Reading changes in the remote object.
 */
