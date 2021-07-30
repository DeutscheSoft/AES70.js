import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../../OCP1/OcaBitSet16.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaDBr } from '../../OCP1/OcaDBr.js';
import { OcaDynamicsFunction } from '../../OCP1/OcaDynamicsFunction.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaLevelDetectionLaw } from '../../OCP1/OcaLevelDetectionLaw.js';
import { OcaPresentationUnit } from '../../OCP1/OcaPresentationUnit.js';

/**
 * A multipurpose dynamics processor. Can be configured as compressor, limiter, expander, or gate. This class is expected to handle the majority of the basic cases. More complex devices may be described in a different manner, using one or more  **OcaDynamicsDetector**  and  **OcaDynamicsCurve**  objects, in conjunction with other Worker objects as needed.
 * @extends OcaActuator
 * @class OcaDynamics
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
 * Gets the value of the Triggered property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDynamics#GetTriggered
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Gets the value of the DynamicGain property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDynamics#GetDynamicGain
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the Function property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaDynamics#GetFunction
 * @returns {Promise<OcaDynamicsFunction>}
 *   A promise which resolves to a single value of type :class:`OcaDynamicsFunction`.
 */
/**
 * Sets the value of the Function property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDynamics#SetFunction
 * @param {OcaDynamicsFunction} Func
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Ratio property. The return value indicates whether the property was successfully retrieved. GetRatio() is a DEPRECATED method. Please use  **GetSlope()**  instead.
 * The return values of this method are
 *
 * - Ratio of type ``number``
 * - minRatio of type ``number``
 * - maxRatio of type ``number``
 *
 * @method OcaDynamics#GetRatio
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Ratio property. The return value indicates whether the property was successfully set. SetRatio() is a DEPRECATED method. Please use  **SetSlope()**  instead.
 *
 * @method OcaDynamics#SetRatio
 * @param {number} Ratio
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Threshold property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Threshold of type :class:`OcaDBr`
 * - minThreshold of type ``number``
 * - maxThreshold of type ``number``
 *
 * @method OcaDynamics#GetThreshold
 * @returns {Promise<Arguments<OcaDBr,number,number>>}
 */
/**
 * Sets the value of the Threshold property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetThreshold
 * @param {OcaDBr} threshold
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the ThresholdPresentationUnits property. The return value indicates if the value was successfully retrieved.
 *
 * @method OcaDynamics#GetThresholdPresentationUnits
 * @returns {Promise<OcaPresentationUnit>}
 *   A promise which resolves to a single value of type :class:`OcaPresentationUnit`.
 */
/**
 * Sets the value of the ThresholdPresentationUnits property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetThresholdPresentationUnits
 * @param {OcaPresentationUnit} Units
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the value of the DetectorLaw property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#GetDetectorLaw
 * @returns {Promise<OcaLevelDetectionLaw>}
 *   A promise which resolves to a single value of type :class:`OcaLevelDetectionLaw`.
 */
/**
 * Sets the value of the DetectorLaw property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetDetectorLaw
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
 * @method OcaDynamics#GetAttackTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the AttackTime property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetAttackTime
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
 * @method OcaDynamics#GetReleaseTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the ReleaseTime property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetReleaseTime
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
 * @method OcaDynamics#GetHoldTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the HoldTime property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetHoldTime
 * @param {number} Time
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the DynamicGainFLoor property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Limit of type ``number``
 * - minLimit of type ``number``
 * - maxLimit of type ``number``
 *
 * @method OcaDynamics#GetDynamicGainFloor
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the DynamicGainFloor property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetDynamicGainFloor
 * @param {number} Limit
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the DynamicGainCeiling property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Limit of type ``number``
 * - minLimit of type ``number``
 * - maxLimit of type ``number``
 *
 * @method OcaDynamics#GetDynamicGainCeiling
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the DynamicGainCeiling property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetDynamicGainCeiling
 * @param {number} Limit
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the KneeParameter property. The return value indicates if the value was successfully retrieved.
 * The return values of this method are
 *
 * - Parameter of type ``number``
 * - minParameter of type ``number``
 * - maxParameter of type ``number``
 *
 * @method OcaDynamics#GetKneeParameter
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the KneeParameter property. The return value indicates if the value was successfully set.
 *
 * @method OcaDynamics#SetKneeParameter
 * @param {number} Parameter
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Slope property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - Slope of type ``number``
 * - minSlope of type ``number``
 * - maxSlope of type ``number``
 *
 * @method OcaDynamics#GetSlope
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Slope property. The return value indicates whether the property was successfully set.
 *
 * @method OcaDynamics#SetSlope
 * @param {number} Slope
 *
 * @returns {Promise<void>}
 */
/**
 * Sets some or all dynamics parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
 *
 * @method OcaDynamics#SetMultiple
 * @param {number} Mask
 *
 * @param {OcaDynamicsFunction} Function
 *
 * @param {OcaDBr} Threshold
 *
 * @param {OcaPresentationUnit} ThresholdPresentationUnits
 *
 * @param {OcaLevelDetectionLaw} DetectorLaw
 *
 * @param {number} AttackTime
 *
 * @param {number} ReleaseTime
 *
 * @param {number} HoldTime
 *
 * @param {number} DynamicGainCeiling
 *
 * @param {number} DynamicGainFloor
 *
 * @param {number} Slope
 *
 * @param {number} KneeParameter
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Triggered changes in the remote object.
 * The property ``Triggered`` is described in the AES70 standard as follows.
 * Read-only property that indicates whether the dynamics processor is
 * currently triggered (i.e. the signal level is above upper threshold or
 * below lower threshold). This property can be monitored via a periodic
 * event subscription.
 *
 * @member {PropertyEvent<boolean>} OcaDynamics#OnTriggeredChanged
 */
/**
 * This event is emitted when the property DynamicGain changes in the remote object.
 * The property ``DynamicGain`` is described in the AES70 standard as follows.
 * Current instantaneous gain of dynamics object. Readonly.
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnDynamicGainChanged
 */
/**
 * This event is emitted when the property Function changes in the remote object.
 * The property ``Function`` is described in the AES70 standard as follows.
 * Dynamics element function - compressor, limiter, expander, etc.
 *
 * @member {PropertyEvent<OcaDynamicsFunction>} OcaDynamics#OnFunctionChanged
 */
/**
 * This event is emitted when the property Ratio changes in the remote object.
 * The property ``Ratio`` is described in the AES70 standard as follows.
 * DEPRECATED PROPERTY - please use property <b>Slope </b>instead.
 * Compression or expansion ratio. For Function = Compress or Limit,
 * value is d(input amplitude)/d(output amplitude). For Function = Expand
 * or Gate, value is d(output amplitude)/d(input amplitude).
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnRatioChanged
 */
/**
 * This event is emitted when the property Threshold changes in the remote object.
 * The property ``Threshold`` is described in the AES70 standard as follows.
 * Compression or expansion threshold.
 *
 * @member {PropertyEvent<OcaDBr>} OcaDynamics#OnThresholdChanged
 */
/**
 * This event is emitted when the property ThresholdPresentationUnits changes in the remote object.
 * The property ``ThresholdPresentationUnits`` is described in the AES70 standard as follows.
 * Compression or expansion threshold presentation units.
 *
 * @member {PropertyEvent<OcaPresentationUnit>} OcaDynamics#OnThresholdPresentationUnitsChanged
 */
/**
 * This event is emitted when the property DetectorLaw changes in the remote object.
 *
 * @member {PropertyEvent<OcaLevelDetectionLaw>} OcaDynamics#OnDetectorLawChanged
 */
/**
 * This event is emitted when the property AttackTime changes in the remote object.
 * The property ``AttackTime`` is described in the AES70 standard as follows.
 * Attack time in seconds.
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnAttackTimeChanged
 */
/**
 * This event is emitted when the property ReleaseTime changes in the remote object.
 * The property ``ReleaseTime`` is described in the AES70 standard as follows.
 * Release time in seconds.
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnReleaseTimeChanged
 */
/**
 * This event is emitted when the property HoldTime changes in the remote object.
 * The property ``HoldTime`` is described in the AES70 standard as follows.
 * Hold time in seconds.
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnHoldTimeChanged
 */
/**
 * This event is emitted when the property DynamicGainCeiling changes in the remote object.
 * The property ``DynamicGainCeiling`` is described in the AES70 standard as follows.
 * Upper limit for DynamicGain
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnDynamicGainCeilingChanged
 */
/**
 * This event is emitted when the property DynamicGainFloor changes in the remote object.
 * The property ``DynamicGainFloor`` is described in the AES70 standard as follows.
 * Lower limit for for DynamicGain
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnDynamicGainFloorChanged
 */
/**
 * This event is emitted when the property KneeParameter changes in the remote object.
 * The property ``KneeParameter`` is described in the AES70 standard as follows.
 * Soft knee parameter. Interpretation is device-dependent.
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnKneeParameterChanged
 */
/**
 * This event is emitted when the property Slope changes in the remote object.
 * The property ``Slope`` is described in the AES70 standard as follows.
 * Slope of transfer function = d(output amplitude) / d(input amplitude).
 * See notes for class OcaDynamicsCurve for further detail. Note that the
 * definition of this value does not depend on the value of property
 * Function.
 *
 * @member {PropertyEvent<number>} OcaDynamics#OnSlopeChanged
 */
