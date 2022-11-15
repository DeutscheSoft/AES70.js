import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * A finite impulse response (FIR) filter.
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
   * Gets the length of the FIR filter. The return value indicates whether the value was successfully retrieved.
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
   * Gets the coefficients of the FIR filter. The return value indicates whether the coefficients were successfully retrieved.
   *
   * @method OcaFilterFIR#GetCoefficients
   * @returns {Promise<number[]>}
   *   A promise which resolves to a single value of type ``number[]``.
   */
  GetCoefficients(): Promise<number[]>;

  /**
   * Sets the value of the properties of the FIR filter. The return value indicates whether the properties were successfully set.
   *
   * @method OcaFilterFIR#SetCoefficients
   * @param {number[]} Coefficients
   *
   * @returns {Promise<void>}
   */
  SetCoefficients(Coefficients: number[]): Promise<void>;

  /**
   * Gets the sample rate of the FIR filter. The return value indicates whether the data was successfully retrieved.
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
   * Sets the sample rate of the FIR filter. The return value indicates whether the rate was successfully set.
   *
   * @method OcaFilterFIR#SetSampleRate
   * @param {number} Rate
   *
   * @returns {Promise<void>}
   */
  SetSampleRate(Rate: number): Promise<void>;
}
