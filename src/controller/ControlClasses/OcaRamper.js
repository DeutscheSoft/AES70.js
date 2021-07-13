import { make_control_class } from '../Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../../OCP1/OcaFloat64.js';
import { OcaProperty } from '../../OCP1/OcaProperty.js';
import { OcaRamperCommand } from '../../OCP1/OcaRamperCommand.js';
import { OcaRamperInterpolationLaw } from '../../OCP1/OcaRamperInterpolationLaw.js';
import { OcaRamperState } from '../../OCP1/OcaRamperState.js';
import { OcaTimeMode } from '../../OCP1/OcaTimeMode.js';
import { OcaUint64 } from '../../OCP1/OcaUint64.js';

/**
 * Agent that gradually changes a property setting from one value to another. Works on a scalar numeric or boolean property of a specified object. Does not work for array, list, map, struct, or string properties. Contains timer features to allow ramps to start immediately or at any time in the future. This is a weakly typed class. All ramping parameters are specified as a  **OcaFloat64** numbers.
 *
 *  - For unsigned integer targets, the ramping parameters are coerced to  **OcaUint64** before comparing.
 *
 *
 *  - For signed integer targets, the ramping parameters are coerced to  **OcaInt64** before comparing.
 *
 *
 *  - For boolean values, the the ramping parameters are coerced to  **OcaUint8.** True is assigned the value One, False is assigned the value Zero.
 *
 * @extends OcaAgent
 * @class OcaRamper
 */
export const OcaRamper = make_control_class(
  'OcaRamper',
  3,
  '\u0001\u0002\u0003',
  2,
  OcaAgent,
  [
    ['Control', 3, 1, [OcaRamperCommand], []],
    ['GetState', 3, 2, [], [OcaRamperState]],
    ['GetRampedProperty', 3, 3, [], [OcaProperty]],
    ['SetRampedProperty', 3, 4, [OcaProperty], []],
    ['GetTimeMode', 3, 5, [], [OcaTimeMode]],
    ['SetTimeMode', 3, 6, [OcaTimeMode], []],
    ['GetStartTime', 3, 7, [], [OcaUint64]],
    ['SetStartTime', 3, 8, [OcaUint64], []],
    ['GetDuration', 3, 9, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDuration', 3, 10, [OcaFloat32], []],
    ['GetInterpolationLaw', 3, 11, [], [OcaRamperInterpolationLaw]],
    ['SetInterpolationLaw', 3, 12, [OcaRamperInterpolationLaw], []],
    ['GetGoal', 3, 13, [], [OcaFloat64]],
    ['SetGoal', 3, 14, [OcaFloat64], []],
  ],
  [
    ['State', [OcaRamperState], 3, 1, false, false, null],
    ['RampedProperty', [OcaProperty], 3, 2, false, false, null],
    ['TimeMode', [OcaTimeMode], 3, 3, false, false, null],
    ['StartTime', [OcaUint64], 3, 4, false, false, null],
    ['Duration', [OcaFloat32], 3, 5, false, false, null],
    ['InterpolationLaw', [OcaRamperInterpolationLaw], 3, 6, false, false, null],
    ['Goal', [OcaFloat64], 3, 7, false, false, null],
  ],
  []
);

/**
 * Executes the given ramper command. The return value indicates whether the command was successfully executed.
 *
 * @method OcaRamper#Control
 * @param {OcaRamperCommand} Command
 *
 * @returns {Promise<void>}
 */
/**
 * Gets current state of ramper. The return value indicates whether the state was successfully retrieved.
 *
 * @method OcaRamper#GetState
 * @returns {Promise<OcaRamperState>}
 *   A promise which resolves to a single value of type :class:`OcaRamperState`.
 */
/**
 * Gets definition of ramped property. The return value indicates whether the object number was successfully retrieved.
 *
 * @method OcaRamper#GetRampedProperty
 * @returns {Promise<OcaProperty>}
 *   A promise which resolves to a single value of type :class:`OcaProperty`.
 */
/**
 * Defines property to be ramped. The return value indicates whether the definition was successful.
 *
 * @method OcaRamper#SetRampedProperty
 * @param {OcaProperty} property
 *
 * @returns {Promise<void>}
 */
/**
 * Gets ramper time mode (absolute or relative). The return value indicates whether the time mode was successfully retrieved.
 *
 * @method OcaRamper#GetTimeMode
 * @returns {Promise<OcaTimeMode>}
 *   A promise which resolves to a single value of type :class:`OcaTimeMode`.
 */
/**
 * Sets ramper time mode (absolute or relative). The return value indicates whether the time mode was successfully set.
 *
 * @method OcaRamper#SetTimeMode
 * @param {OcaTimeMode} TimeMode
 *
 * @returns {Promise<void>}
 */
/**
 * Gets ramp start time. The return value indicates whether the start time was successfully retrieved.
 *
 * @method OcaRamper#GetStartTime
 * @returns {Promise<number|BigInt>}
 *   A promise which resolves to a single value of type ``number|BigInt``.
 */
/**
 * Sets ramper start time. The return value indicates whether the start time was successfully set.
 *
 * @method OcaRamper#SetStartTime
 * @param {number|BigInt} TimeMode
 *
 * @returns {Promise<void>}
 */
/**
 * Gets ramp duration. The return value indicates whether the duration was successfully retrieved.
 * The return values of this method are
 *
 * - Duration of type ``number``
 * - miinDuration of type ``number``
 * - maxDuration of type ``number``
 *
 * @method OcaRamper#GetDuration
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets ramp duration. The return value indicates whether the duration was successfully set.
 *
 * @method OcaRamper#SetDuration
 * @param {number} Duration
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves interpolation law setting. The return value indicates whether the setting was successfully retrieved.
 *
 * @method OcaRamper#GetInterpolationLaw
 * @returns {Promise<OcaRamperInterpolationLaw>}
 *   A promise which resolves to a single value of type :class:`OcaRamperInterpolationLaw`.
 */
/**
 * Sets ramp interpolation law. The return value indicates whether the law was successfully set.
 *
 * @method OcaRamper#SetInterpolationLaw
 * @param {OcaRamperInterpolationLaw} law
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves ramp goal value. The return value indicates whether the duration was successfully retrieved.
 *
 * @method OcaRamper#GetGoal
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets ramp goal value. The return value indicates whether the duration was successfully set.
 *
 * @method OcaRamper#SetGoal
 * @param {number} goal
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property State changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * {Ready, Ramping, Paused, Completed, Disabled} Readonly.
 *
 * @member {PropertyEvent<OcaRamperState>} OcaRamper#OnStateChanged
 */
/**
 * This event is emitted when the property RampedProperty changes in the remote object.
 * The property ``RampedProperty`` is described in the AES70 standard as follows.
 * Identification of the property being ramped.
 *
 * @member {PropertyEvent<OcaProperty>} OcaRamper#OnRampedPropertyChanged
 */
/**
 * This event is emitted when the property TimeMode changes in the remote object.
 * The property ``TimeMode`` is described in the AES70 standard as follows.
 * Absolute or Relative time.
 *
 * @member {PropertyEvent<OcaTimeMode>} OcaRamper#OnTimeModeChanged
 */
/**
 * This event is emitted when the property StartTime changes in the remote object.
 * The property ``StartTime`` is described in the AES70 standard as follows.
 * Time at which to start ramp. If <b>TimeMode=Relative</b>, the actual
 * event start time equals the value of <b>StartTime</b> plus the
 * absolute time that <b>StartTime</b> was most recently set. If
 * <b>TimeMode=Absolute</b>, the actual event start time equals the value
 * of <b>StartTime</b>
 *
 * @member {PropertyEvent<number|BigInt>} OcaRamper#OnStartTimeChanged
 */
/**
 * This event is emitted when the property Duration changes in the remote object.
 * The property ``Duration`` is described in the AES70 standard as follows.
 * Duration of ramp period.
 *
 * @member {PropertyEvent<number>} OcaRamper#OnDurationChanged
 */
/**
 * This event is emitted when the property InterpolationLaw changes in the remote object.
 * The property ``InterpolationLaw`` is described in the AES70 standard as follows.
 * Ramper interpolation law
 *
 * @member {PropertyEvent<OcaRamperInterpolationLaw>} OcaRamper#OnInterpolationLawChanged
 */
/**
 * This event is emitted when the property Goal changes in the remote object.
 * The property ``Goal`` is described in the AES70 standard as follows.
 * Final value of ramp. Datatype is target property's datatype.
 *
 * @member {PropertyEvent<number>} OcaRamper#OnGoalChanged
 */
