import {
  IOcaParametricEQShape,
  OcaParametricEQShape,
} from '../../types/OcaParametricEQShape';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * A parametric equalizer section with various shape options.
 * @extends OcaActuator
 * @class OcaFilterParametric
 */
export declare class OcaFilterParametric extends OcaActuator {
  /**
   * This event is emitted whenever Frequency changes.
   */
  OnFrequencyChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Shape changes.
   */
  OnShapeChanged: PropertyEvent<OcaParametricEQShape>;

  /**
   * This event is emitted whenever WidthParameter changes.
   */
  OnWidthParameterChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever InbandGain changes.
   */
  OnInbandGainChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever ShapeParameter changes.
   */
  OnShapeParameterChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the equalizer frequency setpoint. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Frequency of type ``number``
   * - minFrequency of type ``number``
   * - maxFrequency of type ``number``
   *
   * @method OcaFilterParametric#GetFrequency
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetFrequency(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the equalizer frequency. The return value indicates whether the value was successfully set.
   *
   * @method OcaFilterParametric#SetFrequency
   * @param {number} Frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency(Frequency: number): Promise<void>;

  /**
   * Gets the curve shape of the equalizer. The return value indicates whether the data was successfully retrieved.
   *
   * @method OcaFilterParametric#GetShape
   * @returns {Promise<OcaParametricEQShape>}
   *   A promise which resolves to a single value of type :class:`OcaParametricEQShape`.
   */
  GetShape(): Promise<OcaParametricEQShape>;

  /**
   * Sets the curve shape shape of the equalizer. The return value indicates whether the shape was successfully set.
   *
   * @method OcaFilterParametric#SetShape
   * @param {OcaParametricEQShape} type
   *
   * @returns {Promise<void>}
   */
  SetShape(type: IOcaParametricEQShape): Promise<void>;

  /**
   * Gets the width parameter property of the equalizer. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - Width of type ``number``
   * - minWidth of type ``number``
   * - maxWidth of type ``number``
   *
   * @method OcaFilterParametric#GetWidthParameter
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetWidthParameter(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the width parameter property of the equalizer. The return value indicates whether the Q was successfully set.
   *
   * @method OcaFilterParametric#SetWidthParameter
   * @param {number} Width
   *
   * @returns {Promise<void>}
   */
  SetWidthParameter(Width: number): Promise<void>;

  /**
   * Returns the in-band gain of the equalizer. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - gain of type ``number``
   * - minGain of type ``number``
   * - maxGain of type ``number``
   *
   * @method OcaFilterParametric#GetInbandGain
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetInbandGain(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the in-band gain of the equalizer. The return value indicates whether the gain was successfully set.
   *
   * @method OcaFilterParametric#SetInbandGain
   * @param {number} gain
   *
   * @returns {Promise<void>}
   */
  SetInbandGain(gain: number): Promise<void>;

  /**
   * Returns the shape parameter of the equalizer. The return value indicates whether the data was successfully retrieved.
   * The return values of this method are
   *
   * - shape of type ``number``
   * - minShape of type ``number``
   * - maxShape of type ``number``
   *
   * @method OcaFilterParametric#GetShapeParameter
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetShapeParameter(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the shape parameter of the equalizer. The return value indicates whether the parameter was successfully set.
   *
   * @method OcaFilterParametric#SetShapeParameter
   * @param {number} shape
   *
   * @returns {Promise<void>}
   */
  SetShapeParameter(shape: number): Promise<void>;

  /**
   * Sets some or all filter parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
   *
   * @method OcaFilterParametric#SetMultiple
   * @param {number} Mask
   *
   * @param {number} Frequency
   *
   * @param {OcaParametricEQShape} Shape
   *
   * @param {number} WidthParameter
   *
   * @param {number} InBandGain
   *
   * @param {number} ShapeParameter
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: number,
    Frequency: number,
    Shape: IOcaParametricEQShape,
    WidthParameter: number,
    InBandGain: number,
    ShapeParameter: number
  ): Promise<void>;
}
