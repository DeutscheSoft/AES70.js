import { make_control_class } from './Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Senses a gain value. Typically used to indicate instantaneous gain
 * value of a dynamics element.
 * @extends RemoteControlClasses.OcaSensor
 * @class OcaGainSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaGainSensor = make_control_class(
  'OcaGainSensor',
  4,
  '\u0001\u0001\u0002\n',
  1,
  OcaSensor,
  [['GetReading', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]]],
  [['Reading', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value and limits of the <b>Reading </b>property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaGainSensor#GetReading
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Gain in dB
 * @member RemoteControlClasses.OcaGainSensor#OnReadingChanged {PropertyEvent<OcaDB>} - This event is emitted when Reading changes in the remote object.
 */
