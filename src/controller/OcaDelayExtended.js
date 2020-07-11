import { make_control_class } from './Base.js';
import { OcaDelay } from './OcaDelay.js';
import { OcaDelayUnit } from '../OCP1/OcaDelayUnit.js';
import { OcaDelayValue } from '../OCP1/OcaDelayValue.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Signal delay - extended version. Allows setting delay value in various
 * units. Note that the inherited property 04p01 DelayTime is also
 * supported by this class and reflects actual achieved delay in seconds.
 * @extends RemoteControlClasses.OcaDelay
 * @class OcaDelayExtended
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaDelayExtended = make_control_class(
  'OcaDelayExtended',
  5,
  '\u0001\u0001\u0001\u0007\u0001',
  2,
  OcaDelay,
  [
    ['GetDelayValue', 5, 1, [], [OcaDelayValue, OcaDelayValue, OcaDelayValue]],
    ['SetDelayValue', 5, 2, [OcaDelayValue], []],
    ['GetDelayValueConverted', 5, 3, [OcaDelayUnit], [OcaDelayValue]],
  ],
  [['DelayValue', [OcaDelayValue], 5, 1, false, false, null]],
  []
);

/**
 * Gets the value of the DelayValue property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDelayExtended#GetDelayValue
 * @returns {Promise<Arguments<OcaDelayValue,OcaDelayValue,OcaDelayValue>>}
 */
/**
 * Sets the value of the DelayValue property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDelayExtended#SetDelayValue
 * @param Value {OcaDelayValue}
 *
 * @returns {Promise}
 */
/**
 * Return current delay setting, converted to given units. The return
 * value indicates whether the method has succeeded.
 * @method RemoteControlClasses.OcaDelayExtended#GetDelayValueConverted
 * @param UoM {OcaDelayUnit}
 *
 * @returns {Promise<OcaDelayValue>}
 */
/**
 * Delay value.
 * @member RemoteControlClasses.OcaDelayExtended#OnDelayValueChanged {PropertyEvent<OcaDelayValue>} - This event is emitted when DelayValue changes in the remote object.
 */
