import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaLevelDetectionLaw } from '../../OCP1/OcaLevelDetectionLaw.js';
import { OcaParameterMask } from '../../OCP1/OcaParameterMask.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Dynamics element : side-chain detector.
 * @extends OcaActuator
 * @class OcaDynamicsDetector
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
      [
        OcaParameterMask,
        OcaLevelDetectionLaw,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
      ],
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
 * Gets the value of the Law property. Return status indicates whether the value was successfully retrieved.
 *
 * @method OcaDynamicsDetector#GetLaw
 * @returns {Promise<OcaLevelDetectionLaw>}
 *   A promise which resolves to a single value of type :class:`OcaLevelDetectionLaw`.
 */
/**
 * Sets the value of the Law property. Return status indicates whether the value was successfully set.
 *
 * @method OcaDynamicsDetector#SetLaw
 * @param {OcaLevelDetectionLaw} Law
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the AttackTime property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Time of type ``number``
 * - minTime of type ``number``
 * - maxTime of type ``number``
 *
 * @method OcaDynamicsDetector#GetAttackTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the AttackTime property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDynamicsDetector#SetAttackTime
 * @param {number} Time
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the ReleaseTime property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Time of type ``number``
 * - minTime of type ``number``
 * - maxTime of type ``number``
 *
 * @method OcaDynamicsDetector#GetReleaseTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the ReleaseTime property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDynamicsDetector#SetReleaseTime
 * @param {number} Time
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the HoldTime property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Time of type ``number``
 * - minTime of type ``number``
 * - maxTime of type ``number``
 *
 * @method OcaDynamicsDetector#GetHoldTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the HoldTime property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDynamicsDetector#SetHoldTime
 * @param {number} Time
 *
 * @returns {Promise<void>}
 */
/**
 * Sets some or all detector parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
 *
 * @method OcaDynamicsDetector#SetMultiple
 * @param {IOcaParameterMask} Mask
 * @param {IOcaLevelDetectionLaw} Law
 * @param {number} AttackTime
 *
 * @param {number} ReleaseTime
 *
 * @param {number} HoldTime
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Law changes in the remote object.
 * The property ``Law`` is described in the AES70 standard as follows.
 * Level detection law: RMS, Peak, possibly others
 *
 * @member {PropertyEvent<OcaLevelDetectionLaw>} OcaDynamicsDetector#OnLawChanged
 */
/**
 * This event is emitted when the property AttackTime changes in the remote object.
 * The property ``AttackTime`` is described in the AES70 standard as follows.
 * Detector attack time in seconds.
 *
 * @member {PropertyEvent<number>} OcaDynamicsDetector#OnAttackTimeChanged
 */
/**
 * This event is emitted when the property ReleaseTime changes in the remote object.
 * The property ``ReleaseTime`` is described in the AES70 standard as follows.
 * Detector release time in seconds.
 *
 * @member {PropertyEvent<number>} OcaDynamicsDetector#OnReleaseTimeChanged
 */
/**
 * This event is emitted when the property HoldTime changes in the remote object.
 * The property ``HoldTime`` is described in the AES70 standard as follows.
 * Detector hold time in seconds.
 *
 * @member {PropertyEvent<number>} OcaDynamicsDetector#OnHoldTimeChanged
 */
