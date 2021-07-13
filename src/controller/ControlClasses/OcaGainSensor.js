import { make_control_class } from '../Base.js';
import { OcaSensor } from './OcaSensor.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Senses a gain value. Typically used to indicate instantaneous gain value of a dynamics element.
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
 * Gets the value and limits of the  **Reading** property. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - Reading of type ``number``
 * - minReading of type ``number``
 * - maxReading of type ``number``
 *
 * @method RemoteControlClasses.OcaGainSensor#GetReading
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * This event is emitted when the property Reading changes in the remote object.
 * The property ``Reading`` is described in the AES70 standard as follows.
 * Gain in dB
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaGainSensor#OnReadingChanged
 */
