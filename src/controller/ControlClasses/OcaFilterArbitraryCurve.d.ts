import {
  IOcaTransferFunction,
  OcaTransferFunction,
} from '../../types/OcaTransferFunction.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Arbitrary-curve filter, with transfer function specified as amplitude and
 * phase versus frequency.
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
   * Gets the complex transfer function.
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
   * @param {IOcaTransferFunction} TransferFunction
   *
   * @returns {Promise<void>}
   */
  SetTransferFunction(TransferFunction: IOcaTransferFunction): Promise<void>;

  /**
   * Gets the value and limits of the filter sampling rate.
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
   * Gets the value and limits of the TFMinLength property.
   *
   * @method OcaFilterArbitraryCurve#GetTFMinLength
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetTFMinLength(): Promise<number>;

  /**
   * Gets the value and limits of the TFMaxLength property.
   *
   * @method OcaFilterArbitraryCurve#GetTFMaxLength
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetTFMaxLength(): Promise<number>;
}
