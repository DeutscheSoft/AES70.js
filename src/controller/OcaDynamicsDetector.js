import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../OCP1/OcaBitSet16.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaLevelDetectionLaw } from '../OCP1/OcaLevelDetectionLaw.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Dynamics element : side-chain detector.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDynamicsDetector
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaDynamicsDetector = make_control_class(
  'OcaDynamicsDetector',
  4,
  '\u0001\u0001\u0001\u000f',
  2,
  OcaActuator,
  [
    ['GetLaw', 4, 1, [], [OcaLevelDetectionLaw]],
    ['SetLaw', 4, 2, [OcaLevelDetectionLaw], []],
    ['GetAttackTime', 4, 3, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetAttackTime', 4, 4, [OcaFloat32], []],
    ['GetReleaseTime', 4, 5, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetReleaseTime', 4, 6, [OcaFloat32], []],
    ['GetHoldTime', 4, 7, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetHoldTime', 4, 8, [OcaFloat32], []],
    [
      'SetMultiple',
      4,
      9,
      [OcaBitSet16, OcaLevelDetectionLaw, OcaFloat32, OcaFloat32, OcaFloat32],
      [],
    ],
  ],
  [
    ['Law', [OcaLevelDetectionLaw], 4, 1, false, false, null],
    ['AttackTime', [OcaFloat32], 4, 2, false, false, null],
    ['ReleaseTime', [OcaFloat32], 4, 3, false, false, null],
    ['HoldTime', [OcaFloat32], 4, 4, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Law property. Return status indicates whether
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetLaw
 * @returns {Promise<OcaLevelDetectionLaw>}
 */
/**
 * Sets the value of the Law property. Return status indicates whether
 * the value was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetLaw
 * @param Law {OcaLevelDetectionLaw}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetAttackTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the AttackTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetAttackTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetReleaseTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetReleaseTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamicsDetector#GetHoldTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the HoldTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetHoldTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all detector parameters. The return value indicates if
 * the parameters were successfully set. The action of this method is
 * atomic - if any of the value changes fails, none of the changes are
 * made.
 * @method RemoteControlClasses.OcaDynamicsDetector#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Law {OcaLevelDetectionLaw}
 *
 * @param AttackTime {OcaTimeInterval}
 *
 * @param ReleaseTime {OcaTimeInterval}
 *
 * @param HoldTime {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Level detection law: RMS, Peak, possibly others
 * @member RemoteControlClasses.OcaDynamicsDetector#OnLawChanged {PropertyEvent<OcaLevelDetectionLaw>} - This event is emitted when Law changes in the remote object.
 */
/**
 * Detector attack time in seconds.
 * @member RemoteControlClasses.OcaDynamicsDetector#OnAttackTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when AttackTime changes in the remote object.
 */
/**
 * Detector release time in seconds.
 * @member RemoteControlClasses.OcaDynamicsDetector#OnReleaseTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when ReleaseTime changes in the remote object.
 */
/**
 * Detector hold time in seconds.
 * @member RemoteControlClasses.OcaDynamicsDetector#OnHoldTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when HoldTime changes in the remote object.
 */
