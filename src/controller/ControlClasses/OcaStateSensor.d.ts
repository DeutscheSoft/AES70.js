import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Sensor that reports a 1-of-n state. Sensor counterpart of the actuator
 * **OcaSwitch**.
 * @extends OcaSensor
 * @class OcaStateSensor
 */
export declare class OcaStateSensor extends OcaSensor {
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever StateNames changes.
   */
  OnStateNamesChanged: PropertyEvent<string[]>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the State property and, optionally, its implementation
   * min and max.
   * The return values of this method are
   *
   * - State of type ``number``
   * - minState of type ``number``
   * - maxState of type ``number``
   *
   * @method OcaStateSensor#GetState
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetState(): Promise<Arguments<[number, number, number]>>;

  /**
   * Gets list of names assigned to the States.
   *
   * @method OcaStateSensor#GetStateNames
   * @returns {Promise<string[]>}
   *   A promise which resolves to a single value of type ``string[]``.
   */
  GetStateNames(): Promise<string[]>;

  /**
   * Value to which the StateNames property shall be set if the method succeeds.
   * Optional method - StateNames may be readonly in some implementations.
   *
   * @method OcaStateSensor#SetStateNames
   * @param {string[]} Names
   *
   * @returns {Promise<void>}
   */
  SetStateNames(Names: string[]): Promise<void>;
}
