import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

import { PropertyEvent } from '../property_event';
import { IOcaPowerSupplyState } from '../../types/OcaPowerSupplyState';
import { OcaPowerSupplyLocation } from '../../types/OcaPowerSupplyLocation';
import { OcaPowerSupplyState } from '../../types/OcaPowerSupplyState';
import { OcaPowerSupplyType } from '../../types/OcaPowerSupplyType';

/**
 * A power supply.
 * @extends OcaAgent
 * @class OcaPowerSupply
 */
export declare class OcaPowerSupply extends OcaAgent {
  /**
   * This event is emitted whenever Type changes.
   */
  OnTypeChanged: PropertyEvent<OcaPowerSupplyType>;

  /**
   * This event is emitted whenever ModelInfo changes.
   */
  OnModelInfoChanged: PropertyEvent<string>;

  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaPowerSupplyState>;

  /**
   * This event is emitted whenever Charging changes.
   */
  OnChargingChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever LoadFractionAvailable changes.
   */
  OnLoadFractionAvailableChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever StorageFractionAvailable changes.
   */
  OnStorageFractionAvailableChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the type of the power supply. Return value indicates whether the data was successfully retrieved.
   *
   * @method OcaPowerSupply#GetType
   * @returns {Promise<OcaPowerSupplyType>}
   *   A promise which resolves to a single value of type :class:`OcaPowerSupplyType`.
   */
  GetType(): Promise<OcaPowerSupplyType>;

  /**
   * Gets the power supply's model information text. Return value indicates whether the data was successfully retrieved.
   *
   * @method OcaPowerSupply#GetModelInfo
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetModelInfo(): Promise<string>;

  /**
   * Gets the state of the power supply. Return value indicates whether the data was successfully retrieved.
   *
   * @method OcaPowerSupply#GetState
   * @returns {Promise<OcaPowerSupplyState>}
   *   A promise which resolves to a single value of type :class:`OcaPowerSupplyState`.
   */
  GetState(): Promise<OcaPowerSupplyState>;

  /**
   * Changes the power supply's state. Return value indicates whether the state was successfully changed.
   *
   * @method OcaPowerSupply#SetState
   * @param {OcaPowerSupplyState} state
   *
   * @returns {Promise<void>}
   */
  SetState(state: IOcaPowerSupplyState): Promise<void>;

  /**
   * Gets the value of property  **Charging** . Return value indicates whether the value was successfully retrieved.
   *
   * @method OcaPowerSupply#GetCharging
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetCharging(): Promise<boolean>;

  /**
   * Gets the available load fraction. Return value indicates whether the data was successfully retrieved.
   *
   * @method OcaPowerSupply#GetLoadFractionAvailable
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLoadFractionAvailable(): Promise<number>;

  /**
   * Gets the available storage fraction. Return value indicates whether the data was successfully retrieved.
   *
   * @method OcaPowerSupply#GetStorageFractionAvailable
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetStorageFractionAvailable(): Promise<number>;

  /**
   * Gets the power supply physical location. Return value indicates whether the data was successfully retrieved.
   *
   * @method OcaPowerSupply#GetLocation
   * @returns {Promise<OcaPowerSupplyLocation>}
   *   A promise which resolves to a single value of type :class:`OcaPowerSupplyLocation`.
   */
  GetLocation(): Promise<OcaPowerSupplyLocation>;
}
