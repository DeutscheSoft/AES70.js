import {
  IOcaPolarityState,
  OcaPolarityState,
} from '../../types/OcaPolarityState';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Signal inverter
 * @extends OcaActuator
 * @class OcaPolarity
 */
export declare class OcaPolarity extends OcaActuator {
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaPolarityState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the current inverter state. The return value indicates whether the state was successfully retrieved.
   *
   * @method OcaPolarity#GetState
   * @returns {Promise<OcaPolarityState>}
   *   A promise which resolves to a single value of type :class:`OcaPolarityState`.
   */
  GetState(): Promise<OcaPolarityState>;

  /**
   * Sets the inversion state (i.e. value of the State property). The return value indicates whether the state was successfully set.
   *
   * @method OcaPolarity#SetState
   * @param {OcaPolarityState} state
   *
   * @returns {Promise<void>}
   */
  SetState(state: IOcaPolarityState): Promise<void>;
}
