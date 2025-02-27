import { IOcaPowerState, OcaPowerState } from '../../types/OcaPowerState';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaManager } from './OcaManager';

/**
 * Optional manager that manages power settings and state.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, object number must be 5.
 *
 *
 * @extends OcaManager
 * @class OcaPowerManager
 */
export declare class OcaPowerManager extends OcaManager {
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaPowerState>;

  /**
   * This event is emitted whenever PowerSupplies changes.
   */
  OnPowerSuppliesChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever ActivePowerSupplies changes.
   */
  OnActivePowerSuppliesChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever AutoState changes.
   */
  OnAutoStateChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever TargetState changes.
   */
  OnTargetStateChanged: PropertyEvent<OcaPowerState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Retrieve the value of property **State**, the current power state of the
   * device.
   *
   * @method OcaPowerManager#GetState
   * @returns {Promise<OcaPowerState>}
   *   A promise which resolves to a single value of type :class:`OcaPowerState`.
   */
  GetState(): Promise<OcaPowerState>;

  /**
   * Change the target power state. Erroneously named **SetState** prior to v3
   * of this class.
   *
   * @method OcaPowerManager#SetTargetState
   * @param {IOcaPowerState} State
   *
   * @returns {Promise<void>}
   */
  SetTargetState(State: IOcaPowerState): Promise<void>;

  /**
   * Change the target power state. Erroneously named **SetState** prior to v3
   * of this class.
   * An alias for SetTargetState.
   *
   * @method OcaPowerManager#SetState
   * @param {IOcaPowerState} State
   *
   * @returns {Promise<void>}
   */
  SetState(State: IOcaPowerState): Promise<void>;

  /**
   * Retrieves list of object number(s) of all power supply(ies).
   *
   * @method OcaPowerManager#GetPowerSupplies
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetPowerSupplies(): Promise<number[]>;

  /**
   * Retrieves list of object number(s) of active power supply(ies).
   *
   * @method OcaPowerManager#GetActivePowerSupplies
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetActivePowerSupplies(): Promise<number[]>;

  /**
   * Deactivate one power supply and activate another. An option switch
   * indicates whether the previously active power supply is to be turned off.
   * If it is not turned off, it will be placed in the **Unavailable** state.
   *
   * @method OcaPowerManager#ExchangePowerSupply
   * @param {number} oldPsu
   * @param {number} newPsu
   * @param {boolean} powerOffOld
   *
   * @returns {Promise<void>}
   */
  ExchangePowerSupply(
    oldPsu: number,
    newPsu: number,
    powerOffOld: boolean
  ): Promise<void>;

  /**
   * Gets the value of the **AutoState** property.
   *
   * @method OcaPowerManager#GetAutoState
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetAutoState(): Promise<boolean>;

  /**
   * Retrieve the value of property** TargetState**, the power state of the
   * device to which the device is transitioning.
   *
   * @method OcaPowerManager#GetTargetState
   * @returns {Promise<OcaPowerState>}
   *   A promise which resolves to a single value of type :class:`OcaPowerState`.
   */
  GetTargetState(): Promise<OcaPowerState>;
}
