import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';

/**
 * Signal delay - basic version.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDelay
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaDelay = make_control_class(
  'OcaDelay',
  4,
  '\u0001\u0001\u0001\u0007',
  2,
  OcaActuator,
  [
    ['GetDelayTime', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDelayTime', 4, 2, [OcaFloat32], []],
  ],
  [['DelayTime', [OcaFloat32], 4, 1, false, false, null]],
  []
);

/**
 * Gets the value of the DelayTime property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - Time of type ``number``
 * - minTime of type ``number``
 * - maxTime of type ``number``
 *
 * @method RemoteControlClasses.OcaDelay#GetDelayTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the DelayTime property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaDelay#SetDelayTime
 * @param {number} delayTime
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property DelayTime changes in the remote object.
 * The property ``DelayTime`` is described in the AES70 standard as follows.
 * Delay in seconds.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaDelay#OnDelayTimeChanged
 */
