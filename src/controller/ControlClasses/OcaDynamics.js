import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../../OCP1/OcaBitSet16.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaDBr } from '../../OCP1/OcaDBr.js';
import { OcaDynamicsFunction } from '../../OCP1/OcaDynamicsFunction.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaLevelDetectionLaw } from '../../OCP1/OcaLevelDetectionLaw.js';
import { OcaPresentationUnit } from '../../OCP1/OcaPresentationUnit.js';

/**
 * A multipurpose dynamics processor. Can be configured as compressor,
 * limiter, expander, or gate. This class is expected to handle the
 * majority of the basic cases. More complex devices may be described in
 * a different manner, using one or more <b>OcaDynamicsDetector</b> and
 * <b>OcaDynamicsCurve</b> objects, in conjunction with other Worker
 * objects as needed.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaDynamics
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaDynamics = make_control_class(
  'OcaDynamics',
  4,
  '\u0001\u0001\u0001\u000e',
  2,
  OcaActuator,
  [
    ['GetTriggered', 4, 1, [], [OcaBoolean]],
    ['GetDynamicGain', 4, 2, [], [OcaFloat32]],
    ['GetFunction', 4, 3, [], [OcaDynamicsFunction]],
    ['SetFunction', 4, 4, [OcaDynamicsFunction], []],
    ['GetRatio', 4, 5, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetRatio', 4, 6, [OcaFloat32], []],
    ['GetThreshold', 4, 7, [], [OcaDBr, OcaFloat32, OcaFloat32]],
    ['SetThreshold', 4, 8, [OcaDBr], []],
    ['GetThresholdPresentationUnits', 4, 9, [], [OcaPresentationUnit]],
    ['SetThresholdPresentationUnits', 4, 10, [OcaPresentationUnit], []],
    ['GetDetectorLaw', 4, 11, [], [OcaLevelDetectionLaw]],
    ['SetDetectorLaw', 4, 12, [OcaLevelDetectionLaw], []],
    ['GetAttackTime', 4, 13, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetAttackTime', 4, 14, [OcaFloat32], []],
    ['GetReleaseTime', 4, 15, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetReleaseTime', 4, 16, [OcaFloat32], []],
    ['GetHoldTime', 4, 17, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetHoldTime', 4, 18, [OcaFloat32], []],
    ['GetDynamicGainFloor', 4, 19, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDynamicGainFloor', 4, 20, [OcaFloat32], []],
    ['GetDynamicGainCeiling', 4, 21, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetDynamicGainCeiling', 4, 22, [OcaFloat32], []],
    ['GetKneeParameter', 4, 23, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetKneeParameter', 4, 24, [OcaFloat32], []],
    ['GetSlope', 4, 25, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSlope', 4, 26, [OcaFloat32], []],
    [
      'SetMultiple',
      4,
      27,
      [
        OcaBitSet16,
        OcaDynamicsFunction,
        OcaDBr,
        OcaPresentationUnit,
        OcaLevelDetectionLaw,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
      ],
      [],
    ],
  ],
  [
    ['Triggered', [OcaBoolean], 4, 1, false, false, null],
    ['DynamicGain', [OcaFloat32], 4, 2, false, false, null],
    ['Function', [OcaDynamicsFunction], 4, 3, false, false, null],
    ['Ratio', [OcaFloat32], 4, 4, false, false, null],
    ['Threshold', [OcaDBr], 4, 5, false, false, null],
    [
      'ThresholdPresentationUnits',
      [OcaPresentationUnit],
      4,
      6,
      false,
      false,
      null,
    ],
    ['DetectorLaw', [OcaLevelDetectionLaw], 4, 7, false, false, null],
    ['AttackTime', [OcaFloat32], 4, 8, false, false, null],
    ['ReleaseTime', [OcaFloat32], 4, 9, false, false, null],
    ['HoldTime', [OcaFloat32], 4, 10, false, false, null],
    ['DynamicGainCeiling', [OcaFloat32], 4, 11, false, false, null],
    ['DynamicGainFloor', [OcaFloat32], 4, 12, false, false, null],
    ['KneeParameter', [OcaFloat32], 4, 13, false, false, null],
    ['Slope', [OcaFloat32], 4, 14, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Triggered property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetTriggered
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Gets the value of the DynamicGain property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetDynamicGain
 * @returns {Promise<OcaDB>}
 */
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetFunction
 * @returns {Promise<OcaDynamicsFunction>}
 */
/**
 * Sets the value of the Function property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetFunction
 * @param Func {OcaDynamicsFunction}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Ratio property. The return value indicates
 * whether the property was successfully retrieved. GetRatio() is a
 * DEPRECATED method. Please use <b>GetSlope()</b> instead.
 * @method RemoteControlClasses.OcaDynamics#GetRatio
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the Ratio property. The return value indicates
 * whether the property was successfully set. SetRatio() is a DEPRECATED
 * method. Please use <b>SetSlope()</b> instead.
 * @method RemoteControlClasses.OcaDynamics#SetRatio
 * @param Ratio {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Threshold property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetThreshold
 * @returns {Promise<Arguments<OcaDBr,OcaDBz,OcaDBz>>}
 */
/**
 * Sets the value of the Threshold property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetThreshold
 * @param threshold {OcaDBr}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetThresholdPresentationUnits
 * @returns {Promise<OcaPresentationUnit>}
 */
/**
 * Sets the value of the ThresholdPresentationUnits property. The return
 * value indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetThresholdPresentationUnits
 * @param Units {OcaPresentationUnit}
 *
 * @returns {Promise}
 */
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#GetDetectorLaw
 * @returns {Promise<OcaLevelDetectionLaw>}
 */
/**
 * Sets the value of the DetectorLaw property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetDetectorLaw
 * @param Law {OcaLevelDetectionLaw}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the AttackTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetAttackTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the AttackTime property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetAttackTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetReleaseTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the ReleaseTime property. The return value indicates
 * if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetReleaseTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the HoldTime property. The return value indicates if
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetHoldTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the HoldTime property. The return value indicates if
 * the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetHoldTime
 * @param Time {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainFLoor property. The return value
 * indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetDynamicGainFloor
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainFloor property. The return value
 * indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetDynamicGainFloor
 * @param Limit {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetDynamicGainCeiling
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the DynamicGainCeiling property. The return value
 * indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetDynamicGainCeiling
 * @param Limit {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the KneeParameter property. The return value
 * indicates if the value was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetKneeParameter
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the KneeParameter property. The return value
 * indicates if the value was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetKneeParameter
 * @param Parameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Slope property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaDynamics#GetSlope
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the Slope property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaDynamics#SetSlope
 * @param Slope {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Sets some or all dynamics parameters. The return value indicates if
 * the parameters were successfully set. The action of this method is
 * atomic - if any of the value changes fails, none of the changes are
 * made.
 * @method RemoteControlClasses.OcaDynamics#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Function {OcaDynamicsFunction}
 *
 * @param Threshold {OcaDBr}
 *
 * @param ThresholdPresentationUnits {OcaPresentationUnit}
 *
 * @param DetectorLaw {OcaLevelDetectionLaw}
 *
 * @param AttackTime {OcaTimeInterval}
 *
 * @param ReleaseTime {OcaTimeInterval}
 *
 * @param HoldTime {OcaTimeInterval}
 *
 * @param DynamicGainCeiling {OcaDB}
 *
 * @param DynamicGainFloor {OcaDB}
 *
 * @param Slope {OcaFloat32}
 *
 * @param KneeParameter {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Read-only property that indicates whether the dynamics processor is
 * currently triggered (i.e. the signal level is above upper threshold or
 * below lower threshold). This property can be monitored via a periodic
 * event subscription.
 * @member RemoteControlClasses.OcaDynamics#OnTriggeredChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Triggered changes in the remote object.
 */
/**
 * Current instantaneous gain of dynamics object. Readonly.
 * @member RemoteControlClasses.OcaDynamics#OnDynamicGainChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGain changes in the remote object.
 */
/**
 * Dynamics element function - compressor, limiter, expander, etc.
 * @member RemoteControlClasses.OcaDynamics#OnFunctionChanged {PropertyEvent<OcaDynamicsFunction>} - This event is emitted when Function changes in the remote object.
 */
/**
 * DEPRECATED PROPERTY - please use property <b>Slope </b>instead.
 * Compression or expansion ratio. For Function = Compress or Limit,
 * value is d(input amplitude)/d(output amplitude). For Function = Expand
 * or Gate, value is d(output amplitude)/d(input amplitude).
 * @member RemoteControlClasses.OcaDynamics#OnRatioChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Ratio changes in the remote object.
 */
/**
 * Compression or expansion threshold.
 * @member RemoteControlClasses.OcaDynamics#OnThresholdChanged {PropertyEvent<OcaDBr>} - This event is emitted when Threshold changes in the remote object.
 */
/**
 * Compression or expansion threshold presentation units.
 * @member RemoteControlClasses.OcaDynamics#OnThresholdPresentationUnitsChanged {PropertyEvent<OcaPresentationUnit>} - This event is emitted when ThresholdPresentationUnits changes in the remote object.
 */
/**
 * This was not documented in the OCA standard.
 * @member RemoteControlClasses.OcaDynamics#OnDetectorLawChanged {PropertyEvent<OcaLevelDetectionLaw>} - This event is emitted when DetectorLaw changes in the remote object.
 */
/**
 * Attack time in seconds.
 * @member RemoteControlClasses.OcaDynamics#OnAttackTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when AttackTime changes in the remote object.
 */
/**
 * Release time in seconds.
 * @member RemoteControlClasses.OcaDynamics#OnReleaseTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when ReleaseTime changes in the remote object.
 */
/**
 * Hold time in seconds.
 * @member RemoteControlClasses.OcaDynamics#OnHoldTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when HoldTime changes in the remote object.
 */
/**
 * Upper limit for DynamicGain
 * @member RemoteControlClasses.OcaDynamics#OnDynamicGainCeilingChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainCeiling changes in the remote object.
 */
/**
 * Lower limit for for DynamicGain
 * @member RemoteControlClasses.OcaDynamics#OnDynamicGainFloorChanged {PropertyEvent<OcaDB>} - This event is emitted when DynamicGainFloor changes in the remote object.
 */
/**
 * Soft knee parameter. Interpretation is device-dependent.
 * @member RemoteControlClasses.OcaDynamics#OnKneeParameterChanged {PropertyEvent<OcaFloat32>} - This event is emitted when KneeParameter changes in the remote object.
 */
/**
 * Slope of transfer function = d(output amplitude) / d(input amplitude).
 * See notes for class OcaDynamicsCurve for further detail. Note that the
 * definition of this value does not depend on the value of property
 * Function.
 * @member RemoteControlClasses.OcaDynamics#OnSlopeChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Slope changes in the remote object.
 */
