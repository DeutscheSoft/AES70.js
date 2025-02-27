import { OcaPowerSupplyLocation } from '../../types/OcaPowerSupplyLocation';
import {
  IOcaPowerSupplyState,
  OcaPowerSupplyState,
} from '../../types/OcaPowerSupplyState';
import { OcaPowerSupplyType } from '../../types/OcaPowerSupplyType';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

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
   * Gets the type of the power supply.
   *
   * @method OcaPowerSupply#GetType
   * @returns {Promise<OcaPowerSupplyType>}
   *   A promise which resolves to a single value of type :class:`OcaPowerSupplyType`.
   */
  GetType(): Promise<OcaPowerSupplyType>;

  /**
   * Gets the power supply's model information text.
   *
   * @method OcaPowerSupply#GetModelInfo
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetModelInfo(): Promise<string>;

  /**
   * Gets the state of the power supply.
   *
   * @method OcaPowerSupply#GetState
   * @returns {Promise<OcaPowerSupplyState>}
   *   A promise which resolves to a single value of type :class:`OcaPowerSupplyState`.
   */
  GetState(): Promise<OcaPowerSupplyState>;

  /**
   * Changes the power supply's state.
   *
   * @method OcaPowerSupply#SetState
   * @param {IOcaPowerSupplyState} state
   *
   * @returns {Promise<void>}
   */
  SetState(state: IOcaPowerSupplyState): Promise<void>;

  /**
   * Gets the value of property **Charging**.
   *
   * @method OcaPowerSupply#GetCharging
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetCharging(): Promise<boolean>;

  /**
   * Gets the available load fraction.
   *
   * @method OcaPowerSupply#GetLoadFractionAvailable
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetLoadFractionAvailable(): Promise<number>;

  /**
   * Gets the available storage fraction.
   *
   * @method OcaPowerSupply#GetStorageFractionAvailable
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetStorageFractionAvailable(): Promise<number>;

  /**
   * Gets the power supply physical location.
   *
   * @method OcaPowerSupply#GetLocation
   * @returns {Promise<OcaPowerSupplyLocation>}
   *   A promise which resolves to a single value of type :class:`OcaPowerSupplyLocation`.
   */
  GetLocation(): Promise<OcaPowerSupplyLocation>;
}
