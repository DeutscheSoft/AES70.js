import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Pan or Balance control.
 * @extends OcaActuator
 * @class OcaPanBalance
 */
export declare class OcaPanBalance extends OcaActuator {
  /**
   * This event is emitted whenever Position changes.
   */
  OnPositionChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever MidpointGain changes.
   */
  OnMidpointGainChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the Position property. The return value
   * indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Position of type ``number``
   * - minPosition of type ``number``
   * - maxPosition of type ``number``
   *
   * @method OcaPanBalance#GetPosition
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetPosition(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the Position property. The return value indicates whether
   * the property was successfully set.
   *
   * @method OcaPanBalance#SetPosition
   * @param {number} Position
   *
   * @returns {Promise<void>}
   */
  SetPosition(Position: number): Promise<void>;

  /**
   * Gets the value and limits of the MidpointGain property. The return value
   * indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Gain of type ``number``
   * - minGain of type ``number``
   * - maxGain of type ``number``
   *
   * @method OcaPanBalance#GetMidpointGain
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetMidpointGain(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the MidpointGain property. The return value indicates
   * whether the property was successfully set.
   *
   * @method OcaPanBalance#SetMidpointGain
   * @param {number} Gain
   *
   * @returns {Promise<void>}
   */
  SetMidpointGain(Gain: number): Promise<void>;
}
