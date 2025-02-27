import { IOcaProperty, OcaProperty } from '../../types/OcaProperty';
import { IOcaRamperCommand } from '../../types/OcaRamperCommand';
import {
  IOcaRamperInterpolationLaw,
  OcaRamperInterpolationLaw,
} from '../../types/OcaRamperInterpolationLaw';
import { OcaRamperState } from '../../types/OcaRamperState';
import { IOcaTimeMode, OcaTimeMode } from '../../types/OcaTimeMode';
import {
  IOcaWhenPhysicalAbsolute,
  OcaWhenPhysicalAbsolute,
} from '../../types/OcaWhenPhysicalAbsolute';
import {
  IOcaWhenPhysicalRelative,
  OcaWhenPhysicalRelative,
} from '../../types/OcaWhenPhysicalRelative';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * Agent that gradually changes a property setting from one value to another.
 * Works on a scalar numeric or boolean property of a specified object. Does not
 * work for array, list, map, struct, or string properties. Contains timer
 * features to allow ramps to start immediately or at any time in the future.
 * This is a weakly typed class. All ramping parameters are specified as a
 * **OcaFloat64** numbers.
 *
 *  - For unsigned integer targets, the ramping parameters are coerced to
 *    **OcaUint64** before comparing.
 *
 *  - For signed integer targets, the ramping parameters are coerced to
 *    **OcaInt64** before comparing.
 *
 *  - For boolean values, the the ramping parameters are coerced to
 *    **OcaUint8.** True is assigned the value One, False is assigned the value
 *    Zero.
 *
 *
 * @extends OcaAgent
 * @class OcaRamper
 */
export declare class OcaRamper extends OcaAgent {
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaRamperState>;

  /**
   * This event is emitted whenever RampedProperty changes.
   */
  OnRampedPropertyChanged: PropertyEvent<OcaProperty>;

  /**
   * This event is emitted whenever TimeMode changes.
   */
  OnTimeModeChanged: PropertyEvent<OcaTimeMode>;

  /**
   * This event is emitted whenever StartTime changes.
   */
  OnStartTimeChanged: PropertyEvent<number | BigInt>;

  /**
   * This event is emitted whenever Duration changes.
   */
  OnDurationChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever InterpolationLaw changes.
   */
  OnInterpolationLawChanged: PropertyEvent<OcaRamperInterpolationLaw>;

  /**
   * This event is emitted whenever Goal changes.
   */
  OnGoalChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever StartWhen changes.
   */
  OnStartWhenChanged: PropertyEvent<
    OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative
  >;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Executes the given Ramper command. The return value indicates whether the
   * command was successfully executed.
   *
   * @method OcaRamper#Control
   * @param {IOcaRamperCommand} Command
   *
   * @returns {Promise<void>}
   */
  Control(Command: IOcaRamperCommand): Promise<void>;

  /**
   * Gets current state of ramper. The return value indicates whether the state
   * was successfully retrieved.
   *
   * @method OcaRamper#GetState
   * @returns {Promise<OcaRamperState>}
   *   A promise which resolves to a single value of type :class:`OcaRamperState`.
   */
  GetState(): Promise<OcaRamperState>;

  /**
   * Gets definition of ramped property. The return value indicates whether the
   * object number was successfully retrieved.
   *
   * @method OcaRamper#GetRampedProperty
   * @returns {Promise<OcaProperty>}
   *   A promise which resolves to a single value of type :class:`OcaProperty`.
   */
  GetRampedProperty(): Promise<OcaProperty>;

  /**
   * Defines property to be ramped. The return value indicates whether the
   * definition was successful.
   *
   * @method OcaRamper#SetRampedProperty
   * @param {IOcaProperty} property
   *
   * @returns {Promise<void>}
   */
  SetRampedProperty(property: IOcaProperty): Promise<void>;

  /**
   * Gets ramper time mode (absolute or relative). **Deprecated** in v3 of this
   * class.
   *
   * @method OcaRamper#GetTimeMode
   * @returns {Promise<OcaTimeMode>}
   *   A promise which resolves to a single value of type :class:`OcaTimeMode`.
   */
  GetTimeMode(): Promise<OcaTimeMode>;

  /**
   * Sets ramper time mode (absolute or relative). **Deprecated** in v3 of this
   * class.
   *
   * @method OcaRamper#SetTimeMode
   * @param {IOcaTimeMode} TimeMode
   *
   * @returns {Promise<void>}
   */
  SetTimeMode(TimeMode: IOcaTimeMode): Promise<void>;

  /**
   * Output parameter that holds the start time of the ramp if the method
   * succeeds. **Deprecated** in version 3 of this class.
   *
   * @method OcaRamper#GetStartTime
   * @returns {Promise<number|BigInt>}
   *   A promise which resolves to a single value of type ``number|BigInt``.
   */
  GetStartTime(): Promise<number | BigInt>;

  /**
   * Sets ramper start time. **Deprecated** in v3 of this class.
   *
   * @method OcaRamper#SetStartTime
   * @param {number|BigInt} TimeMode
   *
   * @returns {Promise<void>}
   */
  SetStartTime(TimeMode: number | BigInt): Promise<void>;

  /**
   * Gets ramp duration. The return value indicates whether the duration was
   * successfully retrieved.
   * The return values of this method are
   *
   * - Duration of type ``number``
   * - minDuration of type ``number``
   * - maxDuration of type ``number``
   *
   * @method OcaRamper#GetDuration
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetDuration(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets ramp duration. The return value indicates whether the duration was
   * successfully set.
   *
   * @method OcaRamper#SetDuration
   * @param {number} Duration
   *
   * @returns {Promise<void>}
   */
  SetDuration(Duration: number): Promise<void>;

  /**
   * Retrieves interpolation law setting. The return value indicates whether the
   * setting was successfully retrieved.
   *
   * @method OcaRamper#GetInterpolationLaw
   * @returns {Promise<OcaRamperInterpolationLaw>}
   *   A promise which resolves to a single value of type :class:`OcaRamperInterpolationLaw`.
   */
  GetInterpolationLaw(): Promise<OcaRamperInterpolationLaw>;

  /**
   * Sets ramp interpolation law. The return value indicates whether the law was
   * successfully set.
   *
   * @method OcaRamper#SetInterpolationLaw
   * @param {IOcaRamperInterpolationLaw} law
   *
   * @returns {Promise<void>}
   */
  SetInterpolationLaw(law: IOcaRamperInterpolationLaw): Promise<void>;

  /**
   * Retrieves ramp goal value. The return value indicates whether the duration
   * was successfully retrieved.
   *
   * @method OcaRamper#GetGoal
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetGoal(): Promise<number>;

  /**
   * Sets ramp goal value. The return value indicates whether the duration was
   * successfully set.
   *
   * @method OcaRamper#SetGoal
   * @param {number} goal
   *
   * @returns {Promise<void>}
   */
  SetGoal(goal: number): Promise<void>;

  /**
   * Gets the value of the **StartWhen** property.
   *
   * @method OcaRamper#GetStartWhen
   * @returns {Promise<(OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative)>}
   *   A promise which resolves to a single value of type ``(OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative)``.
   */
  GetStartWhen(): Promise<OcaWhenPhysicalAbsolute | OcaWhenPhysicalRelative>;

  /**
   * Sets the value of the **StartWhen** property. Shall fail if called when
   * **State** is **Ramping**.
   *
   * @method OcaRamper#SetStartWhen
   * @param {(IOcaWhenPhysicalAbsolute | IOcaWhenPhysicalRelative)} When
   *
   * @returns {Promise<void>}
   */
  SetStartWhen(
    When: IOcaWhenPhysicalAbsolute | IOcaWhenPhysicalRelative
  ): Promise<void>;
}
