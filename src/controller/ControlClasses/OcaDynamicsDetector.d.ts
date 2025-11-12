import {
  IOcaLevelDetectionLaw,
  OcaLevelDetectionLaw,
} from '../../types/OcaLevelDetectionLaw.js';
import { IOcaParameterMask } from '../../types/OcaParameterMask.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Dynamics element : side-chain detector.
 * @extends OcaActuator
 * @class OcaDynamicsDetector
 */
export declare class OcaDynamicsDetector extends OcaActuator {
  /**
   * This event is emitted whenever Law changes.
   */
  OnLawChanged: PropertyEvent<OcaLevelDetectionLaw>;

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

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the **Law** property.
   *
   * @method OcaDynamicsDetector#GetLaw
   * @returns {Promise<OcaLevelDetectionLaw>}
   *   A promise which resolves to a single value of type :class:`OcaLevelDetectionLaw`.
   */
  GetLaw(): Promise<OcaLevelDetectionLaw>;

  /**
   * Sets the value of the **Law** property.
   *
   * @method OcaDynamicsDetector#SetLaw
   * @param {IOcaLevelDetectionLaw} Law
   *
   * @returns {Promise<void>}
   */
  SetLaw(Law: IOcaLevelDetectionLaw): Promise<void>;

  /**
   * Gets the value and limits of the **AttackTime** property.
   * The return values of this method are
   *
   * - Time of type ``number``
   * - minTime of type ``number``
   * - maxTime of type ``number``
   *
   * @method OcaDynamicsDetector#GetAttackTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetAttackTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **AttackTime** property.
   *
   * @method OcaDynamicsDetector#SetAttackTime
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
   * @method OcaDynamicsDetector#GetReleaseTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetReleaseTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **ReleaseTime** property.
   *
   * @method OcaDynamicsDetector#SetReleaseTime
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
   * @method OcaDynamicsDetector#GetHoldTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetHoldTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **HoldTime** property.
   *
   * @method OcaDynamicsDetector#SetHoldTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetHoldTime(Time: number): Promise<void>;

  /**
   * Sets some or all detector parameters. The return value indicates if the
   * parameters were successfully set. The action of this method is atomic - if
   * any of the value changes fails, none of the changes are made.
   *
   * @method OcaDynamicsDetector#SetMultiple
   * @param {IOcaParameterMask} Mask
   * @param {IOcaLevelDetectionLaw} Law
   * @param {number} AttackTime
   * @param {number} ReleaseTime
   * @param {number} HoldTime
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: IOcaParameterMask,
    Law: IOcaLevelDetectionLaw,
    AttackTime: number,
    ReleaseTime: number,
    HoldTime: number
  ): Promise<void>;
}
