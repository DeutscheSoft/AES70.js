import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';
import { Arguments } from '../arguments';

import { PropertyEvent } from '../property_event';
import { IOcaTransferFunction } from '../../types/OcaTransferFunction';
import { OcaTransferFunction } from '../../types/OcaTransferFunction';

/**
 * An arbitrary-curve filter, with transfer function specified as amplitude and phase versus frequency.
 * @extends OcaActuator
 * @class OcaFilterArbitraryCurve
 */
export declare class OcaFilterArbitraryCurve extends OcaActuator {
  /**
   * This event is emitted whenever TransferFunction changes.
   */
  OnTransferFunctionChanged: PropertyEvent<OcaTransferFunction>;

  /**
   * This event is emitted whenever SampleRate changes.
   */
  OnSampleRateChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever TFMinLength changes.
   */
  OnTFMinLengthChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever TFMaxLength changes.
   */
  OnTFMaxLengthChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Returns the complex transfer function.
   *
   * @method OcaFilterArbitraryCurve#GetTransferFunction
   * @returns {Promise<OcaTransferFunction>}
   *   A promise which resolves to a single value of type :class:`OcaTransferFunction`.
   */
  GetTransferFunction(): Promise<OcaTransferFunction>;

  /**
   * Sets the complex transfer function.
   *
   * @method OcaFilterArbitraryCurve#SetTransferFunction
   * @param {OcaTransferFunction} TransferFunction
   *
   * @returns {Promise<void>}
   */
  SetTransferFunction(TransferFunction: IOcaTransferFunction): Promise<void>;

  /**
   * Gets the filter sampling rate.
   * The return values of this method are
   *
   * - Rate of type ``number``
   * - minRate of type ``number``
   * - maxRate of type ``number``
   *
   * @method OcaFilterArbitraryCurve#GetSampleRate
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSampleRate(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the filter sampling rate.
   *
   * @method OcaFilterArbitraryCurve#SetSampleRate
   * @param {number} Rate
   *
   * @returns {Promise<void>}
   */
  SetSampleRate(Rate: number): Promise<void>;

  /**
   * Returns the minimum number of required points in the specified transfer function.
   *
   * @method OcaFilterArbitraryCurve#GetTFMinLength
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetTFMinLength(): Promise<number>;

  /**
   * Returns the maximum number of allowed points in the specified transfer function.
   *
   * @method OcaFilterArbitraryCurve#GetTFMaxLength
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetTFMaxLength(): Promise<number>;
}
