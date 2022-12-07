import { IOcaMuteState, OcaMuteState } from '../../types/OcaMuteState';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Signal mute.
 * @extends OcaActuator
 * @class OcaMute
 */
export declare class OcaMute extends OcaActuator {
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaMuteState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the current mute state. The return value indicates whether the state
   * was successfully retrieved.
   *
   * @method OcaMute#GetState
   * @returns {Promise<OcaMuteState>}
   *   A promise which resolves to a single value of type :class:`OcaMuteState`.
   */
  GetState(): Promise<OcaMuteState>;

  /**
   * Sets the mute state (i.e. value of the State property). The return value
   * indicates whether the state was successfully set.
   *
   * @method OcaMute#SetState
   * @param {IOcaMuteState} state
   *
   * @returns {Promise<void>}
   */
  SetState(state: IOcaMuteState): Promise<void>;
}
