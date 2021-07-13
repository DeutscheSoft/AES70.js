import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Simple frequency actuator.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFrequencyActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFrequencyActuator = make_control_class(
  'OcaFrequencyActuator',
  4,
  '\u0001\u0001\u0001\b',
  2,
  OcaActuator,
  [
    ['GetFrequency', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetFrequency', 4, 2, [OcaFloat32], []],
  ],
  [['Frequency', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value of the Frequency property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - Frequency of type ``number``
 * - minFrequency of type ``number``
 * - maxFrequency of type ``number``
 *
 * @method RemoteControlClasses.OcaFrequencyActuator#GetFrequency
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Frequency property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaFrequencyActuator#SetFrequency
 * @param {number} Frequency
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Frequency changes in the remote object.
 * The property ``Frequency`` is described in the AES70 standard as follows.
 * Frequency in Hertz.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaFrequencyActuator#OnFrequencyChanged
 */
