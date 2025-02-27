import { OcaDelayUnit } from '../../OCP1/OcaDelayUnit.js';
import { OcaDelayValue } from '../../OCP1/OcaDelayValue.js';
import { make_control_class } from '../make_control_class.js';
import { OcaDelay } from './OcaDelay.js';

/**
 * Signal delay - extended version. Allows setting delay value in various units.
 * Note that the inherited property 04p01 DelayTime is also supported by this
 * class and reflects actual achieved delay in seconds. This class is
 * **deprecated** in AES70-2022.
 * @extends OcaDelay
 * @class OcaDelayExtended
 */
export const OcaDelayExtended = make_control_class(
  'OcaDelayExtended',
  5,
  '\u0001\u0001\u0001\u0007\u0001',
  3,
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
 * Gets the value and limits of the **DelayValue** property.
 * The return values of this method are
 *
 * - Value of type ``IOcaDelayValue``
 * - minValue of type ``IOcaDelayValue``
 * - maxValue of type ``IOcaDelayValue``
 *
 * @method OcaDelayExtended#GetDelayValue
 * @returns {Promise<Arguments<OcaDelayValue,OcaDelayValue,OcaDelayValue>>}
 */
/**
 * Sets the value of the **DelayValue** property.
 *
 * @method OcaDelayExtended#SetDelayValue
 * @param {IOcaDelayValue} Value
 *
 * @returns {Promise<void>}
 */
/**
 * Get current delay setting, converted to given units.
 *
 * @method OcaDelayExtended#GetDelayValueConverted
 * @param {IOcaDelayUnit} UoM
 *
 * @returns {Promise<OcaDelayValue>}
 *   A promise which resolves to a single value of type :class:`OcaDelayValue`.
 */
/**
 * This event is emitted when the property ``DelayValue`` changes in the remote object.
 * The property ``DelayValue`` is described in the AES70 standard as follows.
 * Delay value.
 *
 * @member {PropertyEvent<OcaDelayValue>} OcaDelayExtended#OnDelayValueChanged
 */
