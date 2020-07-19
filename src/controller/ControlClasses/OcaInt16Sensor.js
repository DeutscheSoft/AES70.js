import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaInt16 } from '../../OCP1/OcaInt16.js';

/**
 * Basic int16 sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaInt16Sensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaInt16Sensor = make_control_class(
  'OcaInt16Sensor',
  5,
  '\u0001\u0001\u0002\u0001\u0003',
  2,
  OcaBasicSensor,
  [['GetReading', 5, 1, [], [OcaInt16, OcaInt16, OcaInt16]]],
  [['Reading', [OcaInt16], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaInt16Sensor#GetReading
 * @returns {Promise<Arguments<OcaInt16,OcaInt16,OcaInt16>>}
 */
/**
 * Int16 reading.
 * @member RemoteControlClasses.OcaInt16Sensor#OnReadingChanged {PropertyEvent<OcaInt16>} - This event is emitted when Reading changes in the remote object.
 */
