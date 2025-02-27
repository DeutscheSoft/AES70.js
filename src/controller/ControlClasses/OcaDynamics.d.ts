import { IOcaDBr, OcaDBr } from '../../types/OcaDBr';
import {
  IOcaDynamicsFunction,
  OcaDynamicsFunction,
} from '../../types/OcaDynamicsFunction';
import {
  IOcaLevelDetectionLaw,
  OcaLevelDetectionLaw,
} from '../../types/OcaLevelDetectionLaw';
import { IOcaParameterMask } from '../../types/OcaParameterMask';
import {
  IOcaPresentationUnit,
  OcaPresentationUnit,
} from '../../types/OcaPresentationUnit';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Multipurpose dynamics processor. Can be configured as compressor, limiter,
 * expander, or gate. This class is designed to handle the majority of the basic
 * cases. More complex devices may be described in a different manner, using one
 * or more **OcaDynamicsDetector** and **OcaDynamicsCurve** objects, in
 * conjunction with other **Worker** objects as needed.
 * @extends OcaActuator
 * @class OcaDynamics
 */
export declare class OcaDynamics extends OcaActuator {
  /**
   * This event is emitted whenever Triggered changes.
   */
  OnTriggeredChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever DynamicGain changes.
   */
  OnDynamicGainChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Function changes.
   */
  OnFunctionChanged: PropertyEvent<OcaDynamicsFunction>;

  /**
   * This event is emitted whenever Ratio changes.
   */
  OnRatioChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Threshold changes.
   */
  OnThresholdChanged: PropertyEvent<OcaDBr>;

  /**
   * This event is emitted whenever ThresholdPresentationUnits changes.
   */
  OnThresholdPresentationUnitsChanged: PropertyEvent<OcaPresentationUnit>;

  /**
   * This event is emitted whenever DetectorLaw changes.
   */
  OnDetectorLawChanged: PropertyEvent<OcaLevelDetectionLaw>;

  /**
   * This event is emitted whenever AttackTime changes.
   */
  OnAttackTimeChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever ReleaseTime changes.
   */
  OnReleaseTimeChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever HoldTime changes.
   */
  OnHoldTimeChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever DynamicGainCeiling changes.
   */
  OnDynamicGainCeilingChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever DynamicGainFloor changes.
   */
  OnDynamicGainFloorChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever KneeParameter changes.
   */
  OnKneeParameterChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Slope changes.
   */
  OnSlopeChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Triggered** property.
   *
   * @method OcaDynamics#GetTriggered
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetTriggered(): Promise<boolean>;

  /**
   * Gets the value of the **DynamicGain** property.
   *
   * @method OcaDynamics#GetDynamicGain
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetDynamicGain(): Promise<number>;

  /**
   * Sets the value of the **Function** property.
   *
   * @method OcaDynamics#GetFunction
   * @returns {Promise<OcaDynamicsFunction>}
   *   A promise which resolves to a single value of type :class:`OcaDynamicsFunction`.
   */
  GetFunction(): Promise<OcaDynamicsFunction>;

  /**
   * Sets the value of the **Function** property.
   *
   * @method OcaDynamics#SetFunction
   * @param {IOcaDynamicsFunction} Func
   *
   * @returns {Promise<void>}
   */
  SetFunction(Func: IOcaDynamicsFunction): Promise<void>;

  /**
   * Gets the value and limits of the **Ratio** property. DEPRECATED method,
   * please use **GetSlope()** instead.
   * The return values of this method are
   *
   * - Ratio of type ``number``
   * - minRatio of type ``number``
   * - maxRatio of type ``number``
   *
   * @method OcaDynamics#GetRatio
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetRatio(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Ratio** property. DEPRECATED method, please use
   * **SetSlope()** instead.
   *
   * @method OcaDynamics#SetRatio
   * @param {number} Ratio
   *
   * @returns {Promise<void>}
   */
  SetRatio(Ratio: number): Promise<void>;

  /**
   * Gets the value and limits of the **Threshold** property.
   * The return values of this method are
   *
   * - Threshold of type ``IOcaDBr``
   * - minThreshold of type ``number``
   * - maxThreshold of type ``number``
   *
   * @method OcaDynamics#GetThreshold
   * @returns {Promise<Arguments<OcaDBr,number,number>>}
   */
  GetThreshold(): Promise<Arguments<[OcaDBr, number, number]>>;

  /**
   * Sets the value of the **Threshold** property.
   *
   * @method OcaDynamics#SetThreshold
   * @param {IOcaDBr} threshold
   *
   * @returns {Promise<void>}
   */
  SetThreshold(threshold: IOcaDBr): Promise<void>;

  /**
   * Gets the value of the **ThresholdPresentationUnits** property.
   *
   * @method OcaDynamics#GetThresholdPresentationUnits
   * @returns {Promise<OcaPresentationUnit>}
   *   A promise which resolves to a single value of type :class:`OcaPresentationUnit`.
   */
  GetThresholdPresentationUnits(): Promise<OcaPresentationUnit>;

  /**
   * Sets the value of the **ThresholdPresentationUnits** property.
   *
   * @method OcaDynamics#SetThresholdPresentationUnits
   * @param {IOcaPresentationUnit} Units
   *
   * @returns {Promise<void>}
   */
  SetThresholdPresentationUnits(Units: IOcaPresentationUnit): Promise<void>;

  /**
   * Sets the value of the **DetectorLaw** property.
   *
   * @method OcaDynamics#GetDetectorLaw
   * @returns {Promise<OcaLevelDetectionLaw>}
   *   A promise which resolves to a single value of type :class:`OcaLevelDetectionLaw`.
   */
  GetDetectorLaw(): Promise<OcaLevelDetectionLaw>;

  /**
   * Sets the value of the **DetectorLaw** property.
   *
   * @method OcaDynamics#SetDetectorLaw
   * @param {IOcaLevelDetectionLaw} Law
   *
   * @returns {Promise<void>}
   */
  SetDetectorLaw(Law: IOcaLevelDetectionLaw): Promise<void>;

  /**
   * Gets the value and limits of the **AttackTime** property.
   * The return values of this method are
   *
   * - Time of type ``number``
   * - minTime of type ``number``
   * - maxTime of type ``number``
   *
   * @method OcaDynamics#GetAttackTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetAttackTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **AttackTime** property.
   *
   * @method OcaDynamics#SetAttackTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetAttackTime(Time: number): Promise<void>;

  /**
   * Gets the value and limits of the **ReleaseTime** property.
   * The return values of this method are
   *
   * - Time of type ``number``
   * - minTime of type ``number``
   * - maxTime of type ``number``
   *
   * @method OcaDynamics#GetReleaseTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetReleaseTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **ReleaseTime** property.
   *
   * @method OcaDynamics#SetReleaseTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetReleaseTime(Time: number): Promise<void>;

  /**
   * Gets the value and limits of the **HoldTime** property.
   * The return values of this method are
   *
   * - Time of type ``number``
   * - minTime of type ``number``
   * - maxTime of type ``number``
   *
   * @method OcaDynamics#GetHoldTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetHoldTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **HoldTime** property.
   *
   * @method OcaDynamics#SetHoldTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetHoldTime(Time: number): Promise<void>;

  /**
   * Gets the value and limits of the **DynamicGainFloor** property.
   * The return values of this method are
   *
   * - Limit of type ``number``
   * - minLimit of type ``number``
   * - maxLimit of type ``number``
   *
   * @method OcaDynamics#GetDynamicGainFloor
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetDynamicGainFloor(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **DynamicGainFloor** property.
   *
   * @method OcaDynamics#SetDynamicGainFloor
   * @param {number} Limit
   *
   * @returns {Promise<void>}
   */
  SetDynamicGainFloor(Limit: number): Promise<void>;

  /**
   * Gets the value and limits of the **DynamicGainCeiling** property.
   * The return values of this method are
   *
   * - Limit of type ``number``
   * - minLimit of type ``number``
   * - maxLimit of type ``number``
   *
   * @method OcaDynamics#GetDynamicGainCeiling
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetDynamicGainCeiling(): Promise<Arguments<[number, number, number]>>;

  /**
   * Value to which the DynamicGainCeiling property shall be set if the method
   * succeeds
   *
   * @method OcaDynamics#SetDynamicGainCeiling
   * @param {number} Limit
   *
   * @returns {Promise<void>}
   */
  SetDynamicGainCeiling(Limit: number): Promise<void>;

  /**
   * Gets the value and limits of the **KneeParameter** property.
   * The return values of this method are
   *
   * - Parameter of type ``number``
   * - minParameter of type ``number``
   * - maxParameter of type ``number``
   *
   * @method OcaDynamics#GetKneeParameter
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetKneeParameter(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **KneeParameter** property.
   *
   * @method OcaDynamics#SetKneeParameter
   * @param {number} Parameter
   *
   * @returns {Promise<void>}
   */
  SetKneeParameter(Parameter: number): Promise<void>;

  /**
   * Gets the value and limits of the **Slope** property.
   * The return values of this method are
   *
   * - Slope of type ``number``
   * - minSlope of type ``number``
   * - maxSlope of type ``number``
   *
   * @method OcaDynamics#GetSlope
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSlope(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Slope** property.
   *
   * @method OcaDynamics#SetSlope
   * @param {number} Slope
   *
   * @returns {Promise<void>}
   */
  SetSlope(Slope: number): Promise<void>;

  /**
   * Sets some or all dynamics parameters. The action of this method shall be
   * atomic - if any of the value changes fails, **none** of the changes shall
   * be made.
   *
   * @method OcaDynamics#SetMultiple
   * @param {IOcaParameterMask} Mask
   * @param {IOcaDynamicsFunction} Function
   * @param {IOcaDBr} Threshold
   * @param {IOcaPresentationUnit} ThresholdPresentationUnits
   * @param {IOcaLevelDetectionLaw} DetectorLaw
   * @param {number} AttackTime
   * @param {number} ReleaseTime
   * @param {number} HoldTime
   * @param {number} DynamicGainCeiling
   * @param {number} DynamicGainFloor
   * @param {number} KneeParameter
   * @param {number} Slope
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: IOcaParameterMask,
    Function: IOcaDynamicsFunction,
    Threshold: IOcaDBr,
    ThresholdPresentationUnits: IOcaPresentationUnit,
    DetectorLaw: IOcaLevelDetectionLaw,
    AttackTime: number,
    ReleaseTime: number,
    HoldTime: number,
    DynamicGainCeiling: number,
    DynamicGainFloor: number,
    KneeParameter: number,
    Slope: number
  ): Promise<void>;
}
