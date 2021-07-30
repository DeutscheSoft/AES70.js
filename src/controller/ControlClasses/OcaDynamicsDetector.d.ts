import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../Base';
import { IOcaLevelDetectionLaw } from '../../types/OcaLevelDetectionLaw';
import { OcaLevelDetectionLaw } from '../../types/OcaLevelDetectionLaw';

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
   * Gets the value of the Law property. Return status indicates whether the value was successfully retrieved.
   *
   * @method OcaDynamicsDetector#GetLaw
   * @returns {Promise<OcaLevelDetectionLaw>}
   *   A promise which resolves to a single value of type :class:`OcaLevelDetectionLaw`.
   */
  GetLaw(): Promise<OcaLevelDetectionLaw>;

  /**
   * Sets the value of the Law property. Return status indicates whether the value was successfully set.
   *
   * @method OcaDynamicsDetector#SetLaw
   * @param {OcaLevelDetectionLaw} Law
   *
   * @returns {Promise<void>}
   */
  SetLaw(Law: IOcaLevelDetectionLaw): Promise<void>;

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
  GetAttackTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the AttackTime property. The return value indicates whether the property was successfully set.
   *
   * @method OcaDynamicsDetector#SetAttackTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetAttackTime(Time: number): Promise<void>;

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
  GetReleaseTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the ReleaseTime property. The return value indicates whether the property was successfully set.
   *
   * @method OcaDynamicsDetector#SetReleaseTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetReleaseTime(Time: number): Promise<void>;

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
  GetHoldTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the HoldTime property. The return value indicates whether the property was successfully set.
   *
   * @method OcaDynamicsDetector#SetHoldTime
   * @param {number} Time
   *
   * @returns {Promise<void>}
   */
  SetHoldTime(Time: number): Promise<void>;

  /**
   * Sets some or all detector parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
   *
   * @method OcaDynamicsDetector#SetMultiple
   * @param {number} Mask
   *
   * @param {OcaLevelDetectionLaw} Law
   *
   * @param {number} AttackTime
   *
   * @param {number} ReleaseTime
   *
   * @param {number} HoldTime
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: number,
    Law: IOcaLevelDetectionLaw,
    AttackTime: number,
    ReleaseTime: number,
    HoldTime: number
  ): Promise<void>;
}
