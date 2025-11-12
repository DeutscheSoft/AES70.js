import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Generic Z-domain rational polynomial filter section with transfer function
 * expression of the form: A(0) + A(1)z + A(2)z^2 + A(3)z^3 + ... B(0) + B(1)z +
 * B(2)z^2 + B(3)z^3 + ...
 * @extends OcaActuator
 * @class OcaFilterPolynomial
 */
export declare class OcaFilterPolynomial extends OcaActuator {
  /**
   * This event is emitted whenever A changes.
   */
  OnAChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever B changes.
   */
  OnBChanged: PropertyEvent<number[]>;

  /**
   * This event is emitted whenever SampleRate changes.
   */
  OnSampleRateChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the polynomial coefficients.
   * The return values of this method are
   *
   * - A of type ``number[]``
   * - B of type ``number[]``
   *
   * @method OcaFilterPolynomial#GetCoefficients
   * @returns {Promise<Arguments<number[],number[]>>}
   */
  GetCoefficients(): Promise<Arguments<[number[], number[]]>>;

  /**
   * Sets the polynomial coefficients.
   *
   * @method OcaFilterPolynomial#SetCoefficients
   * @param {number[]} A
   * @param {number[]} B
   *
   * @returns {Promise<void>}
   */
  SetCoefficients(A: number[], B: number[]): Promise<void>;

  /**
   * Gets the filter sampling rate value and limits.
   * The return values of this method are
   *
   * - Rate of type ``number``
   * - minRate of type ``number``
   * - maxRate of type ``number``
   *
   * @method OcaFilterPolynomial#GetSampleRate
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSampleRate(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the filter sampling rate.
   *
   * @method OcaFilterPolynomial#SetSampleRate
   * @param {number} Rate
   *
   * @returns {Promise<void>}
   */
  SetSampleRate(Rate: number): Promise<void>;

  /**
   * Gets the maximum allowable order (= max number of array elements in
   * numerator and for denominator arrays)
   *
   * @method OcaFilterPolynomial#GetMaxOrder
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaxOrder(): Promise<number>;
}
