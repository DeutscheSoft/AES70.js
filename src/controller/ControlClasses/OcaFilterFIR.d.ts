import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Finite impulse response (FIR) filter.
 * @extends OcaActuator
 * @class OcaFilterFIR
 */
export declare class OcaFilterFIR extends OcaActuator {
  /**
   * This event is emitted whenever Length changes.
   */
  OnLengthChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Coefficients changes.
   */
  OnCoefficientsChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever SampleRate changes.
   */
  OnSampleRateChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the length and length limits of the FIR filter.
   * The return values of this method are
   *
   * - Length of type ``number``
   * - minLength of type ``number``
   * - maxLength of type ``number``
   *
   * @method OcaFilterFIR#GetLength
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetLength(): Promise<Arguments<[number, number, number]>>;

  /**
   * Gets the coefficients of the FIR filter.
   *
   * @method OcaFilterFIR#GetCoefficients
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetCoefficients(): Promise<number[]>;

  /**
   * Sets the coefficients of the FIR filter.
   *
   * @method OcaFilterFIR#SetCoefficients
   * @param {number[]} Coefficients
   *
   * @returns {Promise<void>}
   */
  SetCoefficients(Coefficients: number[]): Promise<void>;

  /**
   * Gets the value and limits of the **SampleRate** property.
   * The return values of this method are
   *
   * - Rate of type ``number``
   * - minRate of type ``number``
   * - maxRate of type ``number``
   *
   * @method OcaFilterFIR#GetSampleRate
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSampleRate(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the sampling rate of the FIR filter.
   *
   * @method OcaFilterFIR#SetSampleRate
   * @param {number} Rate
   *
   * @returns {Promise<void>}
   */
  SetSampleRate(Rate: number): Promise<void>;
}
