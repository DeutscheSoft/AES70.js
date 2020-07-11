import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

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
 * Gets the value of the DelayTime property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDelay#GetDelayTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the DelayTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDelay#SetDelayTime
 * @param delayTime {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Delay in seconds.
 * @member RemoteControlClasses.OcaDelay#OnDelayTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when DelayTime changes in the remote object.
 */
