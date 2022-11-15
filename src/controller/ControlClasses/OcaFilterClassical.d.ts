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
 * A classical analog-style filter - highpass, lowpass, bandpass, etc., with shape characteristics such as Butterworth, Chebyshev, Bessel, and Linkwitz-Riley. Frequently used in loudspeaker crossover networks.
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
   * Gets the value of the Frequency property. The return value indicates if the property was successfully retrieved.
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
   * Sets the value of the Frequency property. The return value indicates if the property was successfully set.
   *
   * @method OcaFilterClassical#SetFrequency
   * @param {number} frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency(frequency: number): Promise<void>;

  /**
   * Returns the passband specification of the filter object. The return value indicates if the specification was successfully retrieved.
   *
   * @method OcaFilterClassical#GetPassband
   * @returns {Promise<OcaFilterPassband>}
   *   A promise which resolves to a single value of type :class:`OcaFilterPassband`.
   */
  GetPassband(): Promise<OcaFilterPassband>;

  /**
   * Sets the passband specification of the filter object. The return value indicates if the specification was successfully set.
   *
   * @method OcaFilterClassical#SetPassband
   * @param {OcaFilterPassband} Passband
   *
   * @returns {Promise<void>}
   */
  SetPassband(Passband: IOcaFilterPassband): Promise<void>;

  /**
   * Returns the Shape property of the filter. The return value indicates if the property was successfully retrieved.
   *
   * @method OcaFilterClassical#GetShape
   * @returns {Promise<OcaClassicalFilterShape>}
   *   A promise which resolves to a single value of type :class:`OcaClassicalFilterShape`.
   */
  GetShape(): Promise<OcaClassicalFilterShape>;

  /**
   * Sets the Shape property of the filter. The return value indicates if the property was successfully set.
   *
   * @method OcaFilterClassical#SetShape
   * @param {OcaClassicalFilterShape} Shape
   *
   * @returns {Promise<void>}
   */
  SetShape(Shape: IOcaClassicalFilterShape): Promise<void>;

  /**
   * Returns the order of the filter. The return value indicates if the property was successfully retrieved.
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
   * Sets the order of the filter. The return value indicates if the property was successfully set.
   *
   * @method OcaFilterClassical#SetOrder
   * @param {number} Order
   *
   * @returns {Promise<void>}
   */
  SetOrder(Order: number): Promise<void>;

  /**
   * Returns the filter parameter. The return value indicates if the property was successfully retrieved.
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
   * Sets the filter parameter. The return value indicates if the parameter was successfully set.
   *
   * @method OcaFilterClassical#SetParameter
   * @param {number} Parameter
   *
   * @returns {Promise<void>}
   */
  SetParameter(Parameter: number): Promise<void>;

  /**
   * Sets some or all filter parameter. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
   *
   * @method OcaFilterClassical#SetMultiple
   * @param {number} Mask
   *
   * @param {number} Frequency
   *
   * @param {OcaFilterPassband} Passband
   *
   * @param {OcaClassicalFilterShape} Shape
   *
   * @param {number} Order
   *
   * @param {number} Parameter
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: number,
    Frequency: number,
    Passband: IOcaFilterPassband,
    Shape: IOcaClassicalFilterShape,
    Order: number,
    Parameter: number
  ): Promise<void>;
}
