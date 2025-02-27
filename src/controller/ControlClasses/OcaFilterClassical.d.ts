import {
  IOcaClassicalFilterShape,
  OcaClassicalFilterShape,
} from '../../types/OcaClassicalFilterShape';
import {
  IOcaFilterPassband,
  OcaFilterPassband,
} from '../../types/OcaFilterPassband';
import { IOcaParameterMask } from '../../types/OcaParameterMask';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Classical analog-style filter - highpass, lowpass, bandpass, etc., with shape
 * characteristics such as Butterworth, Chebyshev, Bessel, and Linkwitz-Riley.
 * @extends OcaActuator
 * @class OcaFilterClassical
 */
export declare class OcaFilterClassical extends OcaActuator {
  /**
   * This event is emitted whenever Frequency changes.
   */
  OnFrequencyChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Passband changes.
   */
  OnPassbandChanged: PropertyEvent<OcaFilterPassband>;

  /**
   * This event is emitted whenever Shape changes.
   */
  OnShapeChanged: PropertyEvent<OcaClassicalFilterShape>;

  /**
   * This event is emitted whenever Order changes.
   */
  OnOrderChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Parameter changes.
   */
  OnParameterChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Frequency** property.
   * The return values of this method are
   *
   * - Frequency of type ``number``
   * - minFrequency of type ``number``
   * - maxFrequency of type ``number``
   *
   * @method OcaFilterClassical#GetFrequency
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetFrequency(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Frequency** property.
   *
   * @method OcaFilterClassical#SetFrequency
   * @param {number} frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency(frequency: number): Promise<void>;

  /**
   * Gets the value of the **Passband** property.
   *
   * @method OcaFilterClassical#GetPassband
   * @returns {Promise<OcaFilterPassband>}
   *   A promise which resolves to a single value of type :class:`OcaFilterPassband`.
   */
  GetPassband(): Promise<OcaFilterPassband>;

  /**
   * Sets the value of the **Passband** property.
   *
   * @method OcaFilterClassical#SetPassband
   * @param {IOcaFilterPassband} Passband
   *
   * @returns {Promise<void>}
   */
  SetPassband(Passband: IOcaFilterPassband): Promise<void>;

  /**
   * Gets the value of the **Shape** property.
   *
   * @method OcaFilterClassical#GetShape
   * @returns {Promise<OcaClassicalFilterShape>}
   *   A promise which resolves to a single value of type :class:`OcaClassicalFilterShape`.
   */
  GetShape(): Promise<OcaClassicalFilterShape>;

  /**
   * Sets the value of the **Shape** property.
   *
   * @method OcaFilterClassical#SetShape
   * @param {IOcaClassicalFilterShape} Shape
   *
   * @returns {Promise<void>}
   */
  SetShape(Shape: IOcaClassicalFilterShape): Promise<void>;

  /**
   * Gets the value and limits of the **Order** property.
   * The return values of this method are
   *
   * - Order of type ``number``
   * - minOrder of type ``number``
   * - maxOrder of type ``number``
   *
   * @method OcaFilterClassical#GetOrder
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetOrder(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Order** property.
   *
   * @method OcaFilterClassical#SetOrder
   * @param {number} Order
   *
   * @returns {Promise<void>}
   */
  SetOrder(Order: number): Promise<void>;

  /**
   * Gets the value and limits of the **Parameter** property.
   * The return values of this method are
   *
   * - Parameter of type ``number``
   * - minParameter of type ``number``
   * - maxParameter of type ``number``
   *
   * @method OcaFilterClassical#GetParameter
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetParameter(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **Parameter** property.
   *
   * @method OcaFilterClassical#SetParameter
   * @param {number} Parameter
   *
   * @returns {Promise<void>}
   */
  SetParameter(Parameter: number): Promise<void>;

  /**
   * Sets some or all filter parameters. The action of this method shall be
   * atomic - if any of the changes fails, **none** of the changes shall be
   * made.
   *
   * @method OcaFilterClassical#SetMultiple
   * @param {IOcaParameterMask} Mask
   * @param {number} Frequency
   * @param {IOcaFilterPassband} Passband
   * @param {IOcaClassicalFilterShape} Shape
   * @param {number} Order
   * @param {number} Parameter
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: IOcaParameterMask,
    Frequency: number,
    Passband: IOcaFilterPassband,
    Shape: IOcaClassicalFilterShape,
    Order: number,
    Parameter: number
  ): Promise<void>;
}
