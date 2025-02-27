import { IOcaParameterMask } from '../../types/OcaParameterMask';
import {
  IOcaParametricEQShape,
  OcaParametricEQShape,
} from '../../types/OcaParametricEQShape';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Parametric equalizer section with various shape options.
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
   * An alias for OnWidthParameterChanged
   */
  OnQChanged: PropertyEvent<number>;
  /**
   * This event is emitted whenever InBandGain changes.
   */
  OnInBandGainChanged: PropertyEvent<number>;

  /**
   * An alias for OnInBandGainChanged
   */
  OnInbandGainChanged: PropertyEvent<number>;
  /**
   * This event is emitted whenever ShapeParameter changes.
   */
  OnShapeParameterChanged: PropertyEvent<number>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value and limits of the **Frequency** property.
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
   * Sets the value of the **Frequency** property.
   *
   * @method OcaFilterParametric#SetFrequency
   * @param {number} Frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency(Frequency: number): Promise<void>;

  /**
   * Gets the value of the **Shape** property.
   *
   * @method OcaFilterParametric#GetShape
   * @returns {Promise<OcaParametricEQShape>}
   *   A promise which resolves to a single value of type :class:`OcaParametricEQShape`.
   */
  GetShape(): Promise<OcaParametricEQShape>;

  /**
   * Sets the value of the **Shape** property.
   *
   * @method OcaFilterParametric#SetShape
   * @param {IOcaParametricEQShape} type
   *
   * @returns {Promise<void>}
   */
  SetShape(type: IOcaParametricEQShape): Promise<void>;

  /**
   * Gets the value and limits of the **WidthParameter** property.
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
   * Gets the value and limits of the **WidthParameter** property.
   * An alias for GetWidthParameter.
   * The return values of this method are
   *
   * - Width of type ``number``
   * - minWidth of type ``number``
   * - maxWidth of type ``number``
   *
   * @method OcaFilterParametric#GetQ
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetQ(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the **WidthParameter** property.
   *
   * @method OcaFilterParametric#SetWidthParameter
   * @param {number} Width
   *
   * @returns {Promise<void>}
   */
  SetWidthParameter(Width: number): Promise<void>;

  /**
   * Sets the value of the **WidthParameter** property.
   * An alias for SetWidthParameter.
   *
   * @method OcaFilterParametric#SetQ
   * @param {number} Width
   *
   * @returns {Promise<void>}
   */
  SetQ(Width: number): Promise<void>;

  /**
   * Gets the value, min, and max of the **InBandGain** property.
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
   * Sets the value of the **InBandGain** property.
   *
   * @method OcaFilterParametric#SetInbandGain
   * @param {number} gain
   *
   * @returns {Promise<void>}
   */
  SetInbandGain(gain: number): Promise<void>;

  /**
   * Sets the value of the **InBandGain** property.
   * An alias for SetInbandGain.
   *
   * @method OcaFilterParametric#SetInbandgain
   * @param {number} gain
   *
   * @returns {Promise<void>}
   */
  SetInbandgain(gain: number): Promise<void>;

  /**
   * Gets the value and limits of the **ShapeParameter** property.
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
   * Sets the value of the S**hapeParameter** property.
   *
   * @method OcaFilterParametric#SetShapeParameter
   * @param {number} shape
   *
   * @returns {Promise<void>}
   */
  SetShapeParameter(shape: number): Promise<void>;

  /**
   * Sets some or all filter parameters. The action of this method is atomic -
   * if any of the value changes fails, none of the changes are made.
   *
   * @method OcaFilterParametric#SetMultiple
   * @param {IOcaParameterMask} Mask
   * @param {number} Frequency
   * @param {IOcaParametricEQShape} Shape
   * @param {number} WidthParameter
   * @param {number} InBandGain
   * @param {number} ShapeParameter
   *
   * @returns {Promise<void>}
   */
  SetMultiple(
    Mask: IOcaParameterMask,
    Frequency: number,
    Shape: IOcaParametricEQShape,
    WidthParameter: number,
    InBandGain: number,
    ShapeParameter: number
  ): Promise<void>;
}
