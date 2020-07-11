import { make_control_class } from './Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Basic current sensor.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaCurrentSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaCurrentSensor = make_control_class(
  'OcaCurrentSensor',
  4,
  '\u0001\u0001\u0002\b',
  1,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaCurrentSensor#GetReading
 * @returns {Promise<Arguments<OcaCurrent,OcaCurrent,OcaCurrent>>}
 */
/**
 * Current value (amperes).
 * @member RemoteControlClasses.OcaCurrentSensor#OnReadingChanged {PropertyEvent<OcaCurrent>} - This event is emitted when Reading changes in the remote object.
 */
