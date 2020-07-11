import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../OCP1/OcaFloat64.js';
import { OcaProperty } from '../OCP1/OcaProperty.js';
import { OcaRamperCommand } from '../OCP1/OcaRamperCommand.js';
import { OcaRamperInterpolationLaw } from '../OCP1/OcaRamperInterpolationLaw.js';
import { OcaRamperState } from '../OCP1/OcaRamperState.js';
import { OcaTimeMode } from '../OCP1/OcaTimeMode.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint64 } from '../OCP1/OcaUint64.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Agent that gradually changes a property setting from one value to
 * another. Works on a scalar numeric or boolean property of a specified
 * object. Does not work for array, list, map, struct, or string
 * properties. Contains timer features to allow ramps to start
 * immediately or at any time in the future. This is a weakly typed
 * class. All ramping parameters are specified as a <b>OcaFloat64
 * </b>numbers. <ul> <li>For unsigned integer targets, the ramping
 * parameters are coerced to <b>OcaUint64 </b>before comparing. </li>
 * <li>For signed integer targets, the ramping parameters are coerced to
 * <b>OcaInt64 </b>before comparing. </li> <li>For boolean values, the
 * the ramping parameters are coerced to <b>OcaUint8. </b>True is
 * assigned the value One, False is assigned the value Zero.</li> </ul>
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaRamper
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Executes the given ramper command. The return value indicates whether
 * the command was successfully executed.
 * @method RemoteControlClasses.OcaRamper#Control
 * @param Command {OcaRamperCommand}
 *
 * @returns {Promise}
 */
/**
 * Gets current state of ramper. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetState
 * @returns {Promise<OcaRamperState>}
 */
/**
 * Gets definition of ramped property. The return value indicates whether
 * the object number was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetRampedProperty
 * @returns {Promise<OcaProperty>}
 */
/**
 * Defines property to be ramped. The return value indicates whether the
 * definition was successful.
 * @method RemoteControlClasses.OcaRamper#SetRampedProperty
 * @param property {OcaProperty}
 *
 * @returns {Promise}
 */
/**
 * Gets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetTimeMode
 * @returns {Promise<OcaTimeMode>}
 */
/**
 * Sets ramper time mode (absolute or relative). The return value
 * indicates whether the time mode was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetTimeMode
 * @param TimeMode {OcaTimeMode}
 *
 * @returns {Promise}
 */
/**
 * Gets ramp start time. The return value indicates whether the start
 * time was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetStartTime
 * @returns {Promise<OcaTimeNTP>}
 */
/**
 * Sets ramper start time. The return value indicates whether the start
 * time was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetStartTime
 * @param TimeMode {OcaTimeNTP}
 *
 * @returns {Promise}
 */
/**
 * Gets ramp duration. The return value indicates whether the duration
 * was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetDuration
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets ramp duration. The return value indicates whether the duration
 * was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetDuration
 * @param Duration {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Retrieves interpolation law setting. The return value indicates
 * whether the setting was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetInterpolationLaw
 * @returns {Promise<OcaRamperInterpolationLaw>}
 */
/**
 * Sets ramp interpolation law. The return value indicates whether the
 * law was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetInterpolationLaw
 * @param law {OcaRamperInterpolationLaw}
 *
 * @returns {Promise}
 */
/**
 * Retrieves ramp goal value. The return value indicates whether the
 * duration was successfully retrieved.
 * @method RemoteControlClasses.OcaRamper#GetGoal
 * @returns {Promise<OcaFloat64>}
 */
/**
 * Sets ramp goal value. The return value indicates whether the duration
 * was successfully set.
 * @method RemoteControlClasses.OcaRamper#SetGoal
 * @param goal {OcaFloat64}
 *
 * @returns {Promise}
 */
/**
 * {Ready, Ramping, Paused, Completed, Disabled} Readonly.
 * @member RemoteControlClasses.OcaRamper#OnStateChanged {PropertyEvent<OcaRamperState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Identification of the property being ramped.
 * @member RemoteControlClasses.OcaRamper#OnRampedPropertyChanged {PropertyEvent<OcaProperty>} - This event is emitted when RampedProperty changes in the remote object.
 */
/**
 * Absolute or Relative time.
 * @member RemoteControlClasses.OcaRamper#OnTimeModeChanged {PropertyEvent<OcaTimeMode>} - This event is emitted when TimeMode changes in the remote object.
 */
/**
 * Time at which to start ramp. If <b>TimeMode=Relative</b>, the actual
 * event start time equals the value of <b>StartTime</b> plus the
 * absolute time that <b>StartTime</b> was most recently set. If
 * <b>TimeMode=Absolute</b>, the actual event start time equals the value
 * of <b>StartTime</b>
 * @member RemoteControlClasses.OcaRamper#OnStartTimeChanged {PropertyEvent<OcaTimeNTP>} - This event is emitted when StartTime changes in the remote object.
 */
/**
 * Duration of ramp period.
 * @member RemoteControlClasses.OcaRamper#OnDurationChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Duration changes in the remote object.
 */
/**
 * Ramper interpolation law
 * @member RemoteControlClasses.OcaRamper#OnInterpolationLawChanged {PropertyEvent<OcaRamperInterpolationLaw>} - This event is emitted when InterpolationLaw changes in the remote object.
 */
/**
 * Final value of ramp. Datatype is target property's datatype.
 * @member RemoteControlClasses.OcaRamper#OnGoalChanged {PropertyEvent<OcaFloat64>} - This event is emitted when Goal changes in the remote object.
 */
